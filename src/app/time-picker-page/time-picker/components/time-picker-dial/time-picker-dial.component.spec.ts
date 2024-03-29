import { NO_ERRORS_SCHEMA, SimpleChanges } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TimePeriod } from '../../models/time-period.enum';
import { TimeUnit } from '../../models/time-unit.enum';
import * as TimepickerTime from '../../utils/timepicker-time.utils';
import { TimepickerDialComponent } from './time-picker-dial.component';

describe('TimepickerDialComponent', () => {

  let fixture: ComponentFixture<TimepickerDialComponent>;
  let component: TimepickerDialComponent;

  beforeEach(() => {

    fixture = TestBed.configureTestingModule({
      declarations: [TimepickerDialComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).createComponent(TimepickerDialComponent);

    component = fixture.componentInstance;
  });

  it('should call disableHours and disableMinutes on period change', () => {
    const spyOnHours = spyOn(TimepickerTime, 'disableHours');
    const spyOnMinutes = spyOn(TimepickerTime, 'disableMinutes');
    const changes: SimpleChanges = {
      period: {
        currentValue: TimePeriod.AM,
        previousValue: undefined,
        firstChange: true,
        isFirstChange: () => null
      }
    };

    component.ngOnChanges(changes);
    expect(spyOnHours).toHaveBeenCalled();
    expect(spyOnMinutes).toHaveBeenCalled();
  });

  it('should call disableHours on format change', () => {
    const spyOnHours = spyOn(TimepickerTime, 'disableHours');
    const changes: SimpleChanges = {
      format: {
        currentValue: 24,
        previousValue: undefined,
        firstChange: true,
        isFirstChange: () => null
      }
    };

    component.ngOnChanges(changes);
    expect(spyOnHours).toHaveBeenCalled();
  });

  it('should call disableMinutes on hour change', () => {
    const spy = spyOn(TimepickerTime, 'disableMinutes');
    const changes: SimpleChanges = {
      hour: {
        currentValue: 24,
        previousValue: undefined,
        firstChange: true,
        isFirstChange: () => null
      }
    };

    component.ngOnChanges(changes);
    expect(spy).toHaveBeenCalled();
  });

  it('should not call disableHours and disableMinutes', () => {
    const spyOnHours = spyOn(TimepickerTime, 'disableHours');
    const spyOnMinutes = spyOn(TimepickerTime, 'disableMinutes');
    const changes: SimpleChanges = {
      minTime: {
        currentValue: null,
        previousValue: undefined,
        firstChange: true,
        isFirstChange: () => null
      }
    };

    component.ngOnChanges(changes);
    expect(spyOnHours).toHaveBeenCalledTimes(0);
    expect(spyOnMinutes).toHaveBeenCalledTimes(0);
  });

  it('should emit changed time unit', fakeAsync(() => {
    let timeUnit = null;

    component.timeUnitChanged.subscribe(unit => timeUnit = unit);
    component.changeTimeUnit(TimeUnit.MINUTE);

    expect(timeUnit).toBe(TimeUnit.MINUTE);
  }));

  it('should emit changed period', fakeAsync(() => {
    let period = TimePeriod.AM;

    component.periodChanged.subscribe(p => period = p);
    component.changePeriod(TimePeriod.PM);

    tick();
    expect(period).toBe(TimePeriod.PM);
  }));

  it('should emit changed hour', fakeAsync(() => {
    let hour = { time: 1, angle: 30 };

    component.hourChanged.subscribe(h => hour = h);
    component.changeHour({ time: 2, angle: 60 });

    tick();
    expect(hour).toEqual({ time: 2, angle: 60 });
  }));

  it('should emit changed minute', fakeAsync(() => {
    let minute = { time: 10, angle: 30 };

    component.minuteChanged.subscribe(m => minute = m);
    component.changeMinute({ time: 20, angle: 60 });

    tick();
    expect(minute).toEqual({ time: 20, angle: 60 });
  }));

  it('should set isHintVisible true', () => {
    expect(component.isHintVisible).toBeFalsy();

    component.showHint();

    expect(component.isHintVisible).toBeTruthy();
  });

  it('should set isHintVisible false', () => {
    component.isHintVisible = true;

    component.hideHint();

    expect(component.isHintVisible).toBeFalsy();
  });

});
