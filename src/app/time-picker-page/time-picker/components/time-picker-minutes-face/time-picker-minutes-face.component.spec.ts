import { NO_ERRORS_SCHEMA, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimePeriod } from '../../models/time-period.enum';
import * as TimepickerTime from '../../utils/timepicker-time.utils';
import { TimepickerMinutesFaceComponent } from './time-picker-minutes-face.component';

describe('TimepickerMinutesFaceComponent', () => {
  let fixture: ComponentFixture<TimepickerMinutesFaceComponent>;
  let component: TimepickerMinutesFaceComponent;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TimepickerMinutesFaceComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).createComponent(TimepickerMinutesFaceComponent);

    component = fixture.componentInstance;
  });

  it('should call disableMinutes once period changed', () => {
    const spy = spyOn(TimepickerTime, 'disableMinutes');
    const changes: SimpleChanges = {
      period: {
        currentValue: TimePeriod.PM,
        previousValue: undefined,
        firstChange: true,
        isFirstChange: () => null
      }
    };
    const time = new Date();
    const format = 12;
    const period = TimePeriod.PM;
    const minutes = TimepickerTime.getMinutes();
    component.minTime = time;
    component.maxTime = time;
    component.format = format;
    component.period = period;
    component.minutesList = minutes;
    component.selectedHour = 1;

    component.ngOnChanges(changes);
    expect(spy).toHaveBeenCalledWith(minutes, 1, { min: time, max: time, format, period });
  });

  it('should not call disableMinutes', () => {
    const spy = spyOn(TimepickerTime, 'disableMinutes');
    const changes: SimpleChanges = {
      minTime: {
        currentValue: null,
        previousValue: undefined,
        firstChange: true,
        isFirstChange: () => null
      }
    };

    component.ngOnChanges(changes);
    expect(spy).toHaveBeenCalledTimes(0);
  });
});
