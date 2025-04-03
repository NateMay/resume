import { animate, sequence, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ClockFaceTime } from '../../models/clock-face-time.interface';
import { TimePeriod } from '../../models/time-period.enum';
import { TimeUnit } from '../../models/time-unit.enum';
import { disableHours, disableMinutes } from '../../utils/timepicker-time.utils';


@Component({
    selector: 'cc-timepicker-period',
    styleUrls: ['time-picker-period.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('scaleInOut', [
            transition(':enter', [
                style({ transform: 'scale(0)' }),
                animate('.2s', style({ transform: 'scale(1)' })),
                sequence([
                    animate('3s', style({ opacity: 1 })),
                    animate('.3s', style({ opacity: 0 }))
                ])
            ])
        ])
    ],
    template: `
    <cc-am-pm-toggle
      [isPM]="selectedPeriod === timePeriod.PM"
      (isPMChange)="changePeriod()"
    ></cc-am-pm-toggle>


    <div class="timepicker-period__warning"
      *ngIf="!isPeriodAvailable"
      [@scaleInOut]
      (@scaleInOut.done)="animationDone()">

      <p>Current time would be invalid in this period.</p>

    </div>
    `,
    standalone: false
})
export class TimepickerPeriodComponent {

  timePeriod = TimePeriod;
  isPeriodAvailable = true;

  @Input() selectedPeriod: TimePeriod;
  @Input() format: number;
  @Input() activeTimeUnit: TimeUnit;
  @Input() hours: ClockFaceTime[];
  @Input() minutes: ClockFaceTime[];
  @Input() minTime: Date;
  @Input() maxTime: Date;
  @Input() selectedHour: number | string;

  @Output() periodChanged = new EventEmitter<TimePeriod>();

  changePeriod(): void {
    this.selectedPeriod = (this.selectedPeriod === TimePeriod.PM) ? TimePeriod.AM : TimePeriod.PM
    this.isPeriodAvailable = this.isSwitchPeriodAvailable(this.selectedPeriod);
    if (this.isPeriodAvailable) {
      this.periodChanged.next(this.selectedPeriod);
    }
  }

  animationDone(): void {
    this.isPeriodAvailable = true;
  }

  private isSwitchPeriodAvailable(period: TimePeriod): boolean {
    const time = this.getDisabledTimeByPeriod(period);
    return !time.every(t => t.disabled);
  }

  private getDisabledTimeByPeriod(period: TimePeriod): ClockFaceTime[] {
    switch (this.activeTimeUnit) {
      case TimeUnit.HOUR:
        return disableHours(this.hours, {
          min: this.minTime,
          max: this.maxTime,
          format: this.format,
          period
        });
      case TimeUnit.MINUTE:
        return disableMinutes(this.minutes, +this.selectedHour, {
          min: this.minTime,
          max: this.maxTime,
          format: this.format,
          period
        });
      default: throw new Error('no such TimeUnit');
    }
  }
}
