import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  Optional,
  TemplateRef,
  ViewChild
} from '@angular/core'
import { Subject } from 'rxjs'
import { forceZero } from 'src/app/functions/dateFromTime'
import { dateFromTime } from '../../../../functions/dateFromTime'
import { ClockFaceTime } from '../../models/clock-face-time.interface'
import { TimePeriod } from '../../models/time-period.enum'
import { TimeUnit } from '../../models/time-unit.enum'
import { TimePickerData, TIME_PICKER_DATA } from '../../utils/time-picker-data'
import { TimePickerInputComponent } from '../time-picker-input/time-picker-input.component'

const DEFAULT_HOUR: ClockFaceTime = {
  time: 12,
  angle: 360
}
const DEFAULT_MINUTE: ClockFaceTime = {
  time: 0,
  angle: 360
}

@Component({
  selector: 'cc-timepicker-dialog',
  styleUrls: ['./time-picker-dialog.component.scss'],
  host: { class: 'cc-time-picker-dialog mat-elevation-z2' },
  template: `
    <span cdkTrapFocus>
      <header>
        <cc-timepicker-dial
          [format]="format"
          [hour]="selectedHour?.time"
          [minute]="selectedMinute?.time"
          [period]="selectedPeriod"
          [activeTimeUnit]="activeTimeUnit"
          [minTime]="minTime"
          [maxTime]="maxTime"
          [editableHintTmpl]="editableHintTmpl"
          [minutesGap]="minutesGap"
          (periodChanged)="changePeriod($event)"
          (timeUnitChanged)="changeTimeUnit($event)"
          (hourChanged)="onHourChange($event)"
          (minuteChanged)="onMinuteChange($event)"
        ></cc-timepicker-dial>
      </header>

      <div class="timepicker__main-content">
        <div class="timepicker__body" [ngSwitch]="activeTimeUnit">
          <div *ngSwitchCase="timeUnit.HOUR">
            <cc-timepicker-24-hours-face
              *ngIf="format === 24; else ampmHours"
              (hourChange)="onHourChange($event)"
              [selectedHour]="selectedHour"
              [minTime]="minTime"
              [maxTime]="maxTime"
              [format]="format"
              (hourSelected)="onHourSelected($event)"
            ></cc-timepicker-24-hours-face>

            <ng-template #ampmHours>
              <cc-timepicker-12-hours-face
                (hourChange)="onHourChange($event)"
                [selectedHour]="selectedHour"
                [period]="selectedPeriod"
                [minTime]="minTime"
                [maxTime]="maxTime"
                (hourSelected)="onHourSelected($event)"
              ></cc-timepicker-12-hours-face>
            </ng-template>
          </div>

          <cc-timepicker-minutes-face
            *ngSwitchCase="timeUnit.MINUTE"
            [selectedMinute]="selectedMinute"
            [selectedHour]="selectedHour?.time"
            [minTime]="minTime"
            [maxTime]="maxTime"
            [format]="format"
            [period]="selectedPeriod"
            [minutesGap]="minutesGap"
            (minuteChange)="onMinuteChange($event)"
          ></cc-timepicker-minutes-face>
        </div>
        <div class="actions">
          <button mat-button (click)="data.close()">Close</button>
          <button mat-button (click)="setTime()">OK</button>
        </div>
      </div>
    </span>
  `
})
export class TimepickerDialogComponent implements OnDestroy {
  private unsub$: Subject<void> = new Subject()

  private _minutesGap: number
  private input: TimePickerInputComponent

  selectedHour: ClockFaceTime
  selectedMinute: ClockFaceTime
  selectedPeriod: TimePeriod

  timeUnit = TimeUnit
  activeTimeUnit = TimeUnit.HOUR

  @Input() editableHintTmpl: TemplateRef<Node>

  @Input() set minutesGap(gap: number) {
    if (gap == null) return
    gap = Math.floor(gap)
    this._minutesGap = gap <= 59 ? gap : 1
  }

  @ViewChild('timepickerww') timepickerComponent: ElementRef

  get minutesGap(): number {
    return this._minutesGap
  }

  get minTime(): Date {
    return this.input && this.input.min
  }

  get maxTime(): Date {
    return this.input && this.input.max
  }

  get disabled(): boolean {
    return this.input && this.input.disabled
  }

  get format(): number {
    return this.input && this.input.format
  }

  constructor(
    @Optional() @Inject(TIME_PICKER_DATA) public data: TimePickerData
  ) {
    if (Boolean(data)) {
      this.input = data.input
      this.setDefaultTime(this.input.time)
    }
  }

  getFullTime(format: number): string {
    const hour = this.selectedHour.time
    const minute = this.selectedMinute.time
    const period = format === 12 ? this.selectedPeriod : ''
    return `${forceZero(hour)}:${forceZero(minute)} ${period}`.trim()
  }

  ngOnDestroy() {
    this.unsub$.next()
    this.unsub$.complete()
  }

  onHourSelected(hour: number): void {
    this.changeTimeUnit(TimeUnit.MINUTE)
    // this.hourSelected.next(hour);
  }

  onHourChange(hour: ClockFaceTime): void {
    this.selectedHour = hour
  }

  onMinuteChange(minute: ClockFaceTime): void {
    this.selectedMinute = minute
  }

  changePeriod(period: TimePeriod): void {
    this.selectedPeriod = period
  }

  changeTimeUnit(unit: TimeUnit): void {
    this.activeTimeUnit = unit
  }

  // DEPENDS ON (time-picker) then TEST (time-picker)
  setTime(): void {
    this.data.timeSet(this.getFullTime(this.format))
    this.data.close()
  }

  setDefaultTime(time: string): void {
    const defaultTime = dateFromTime(time)
    if (defaultTime) {
      const period = time.substr(time.length - 2).toUpperCase()
      const hour = formatHourByPeriod(
        defaultTime.getHours(),
        period as TimePeriod
      )
      const minutes = defaultTime.getMinutes()
      this.selectedHour = { ...DEFAULT_HOUR, time: hour, angle: hour * 30 }
      this.selectedMinute = {
        ...DEFAULT_MINUTE,
        time: minutes,
        angle: minutes * 6
      }
      this.selectedPeriod = period as TimePeriod
    } else this.resetTime()
  }

  private resetTime(): void {
    this.selectedHour = { ...DEFAULT_HOUR }
    this.selectedMinute = { ...DEFAULT_MINUTE }
    this.selectedPeriod = TimePeriod.AM
  }
}

/***
 * // TODO (move) into functions or TimeAdapter
 *  Format hour in 24hours format to meridian (AM or PM) format
 */
function formatHourByPeriod(hour: number, period: TimePeriod): number {
  switch (period) {
    case TimePeriod.AM:
      return hour === 0 ? 12 : hour
    case TimePeriod.PM:
      return hour === 12 ? 12 : hour - 12
    default:
      return hour
  }
}
