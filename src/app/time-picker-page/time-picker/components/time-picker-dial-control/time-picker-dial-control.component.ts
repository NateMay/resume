/* tslint:disable:triple-equals */
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ClockFaceTime } from '../../models/clock-face-time.interface';
import { TimeUnit } from '../../models/time-unit.enum';

@Component({
  selector: 'cc-timepicker-dial-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <input class="timepicker-dial__control timepicker-dial__item"
        #input
        [ngClass]="{'timepicker-dial__item_active': isActive }"
        [(ngModel)]="_time"
        (input)="updateTime()"
        (focus)="saveTimeAndChangeTimeUnit($event, timeUnit)"
        (blur)="formatTime()"
        (keydown)="onKeyDown($event)">
    `,
  styleUrls: ['time-picker-dial-control.component.scss']
})
export class TimepickerDialControlComponent implements AfterViewInit{

  previousTime: number | string;

  @Input() isFirst: boolean = false;

  @Input() timeList: ClockFaceTime[];
  @Input() timeUnit: TimeUnit;
  _time: string;
  @Input() set time(timeStr: string) {
    this._time = (+timeStr < 10) ? `0${+timeStr}` : `${+timeStr}`;
  }
  @Input() isActive: boolean;
  @Input() minutesGap: number;

  @Output() timeUnitChanged = new EventEmitter<TimeUnit>();
  @Output() timeChanged = new EventEmitter<ClockFaceTime>();

  @ViewChild('input') input: ElementRef;

  ngAfterViewInit() {
    if (this.isFirst && this.input) setTimeout(() => {
      this.input.nativeElement.focus()
    }, 1)
  }

  private get selectedTime(): ClockFaceTime {
    if (!!this._time) return this.timeList.find(t => t.time === +this._time);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //     if (changes['time'] && (changes['time'].currentValue !== undefined)) {
  //         if (!changes['time'].firstChange) return;
  //         this.time = changes['time'].currentValue;
  //     }
  // }

  saveTimeAndChangeTimeUnit(event: FocusEvent, unit: TimeUnit): void {
    event.preventDefault();
    this.previousTime = this._time;
    this.timeUnitChanged.next(unit);
  }

  updateTime(): void {
    const time = this.selectedTime;
    if (time) {
      this.timeChanged.next(time);
      this.previousTime = time.time;
    }
  }

  formatTime(): void {
    this.time = this._time || `${this.previousTime}`;
  }

  onKeyDown(e: KeyboardEvent): void {
    const char = String.fromCharCode(e.keyCode);

    if ((!isInputAllowed(e)) || isTimeDisabledToChange(this._time, char, this.timeList)) {
      e.preventDefault();
    }

    if (isInputAllowed(e)) {
      this.changeTimeByArrow(e.keyCode);
    }
  }

  private changeTimeByArrow(keyCode: number): void {
    const ARROW_UP = 38;
    const ARROW_DOWN = 40;
    let time: string;

    // TODO (time-picker) allow counter-clockwise movement from 12 and 00
    if (keyCode === ARROW_UP) time = String(+this._time + (this.minutesGap || 1));
    else if (keyCode === ARROW_DOWN) time = String(+this._time - (this.minutesGap || 1));


    if (!isTimeUnavailable(time, this.timeList)) {
      this._time = time;
      this.updateTime();
    }
  }

}

function isInputAllowed(e: KeyboardEvent): boolean {
  // Allow: backspace, delete, tab, escape, enter
  if ([46, 8, 9, 27, 13].some(n => n === e.keyCode) ||
    // Allow: Ctrl/cmd+A
    (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
    // Allow: Ctrl/cmd+C
    (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
    // Allow: Ctrl/cmd+X
    (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
    // Allow: home, end, left, right, up, down
    (e.keyCode >= 35 && e.keyCode <= 40)) {

    return true;
  }
  return !((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105));
}

function isTimeDisabledToChange(currentTime: string, nextTime: string, timeList: ClockFaceTime[]): boolean {
  const isNumber = /\d/.test(nextTime);

  if (isNumber) {
    const time = currentTime + nextTime;
    return isTimeUnavailable(time, timeList);
  }
}

function isTimeUnavailable(time: string, timeList: ClockFaceTime[]): boolean {
  const selectedTime = timeList.find(value => value.time === +time);
  return !selectedTime || (selectedTime && selectedTime.disabled);
}
