import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import * as TimepickerTime from '../../utils/timepicker-time.utils';
import { Timepicker24HoursFaceComponent } from './time-picker-24-hours-face.component';

describe('Timepicker24HoursFaceComponent', () => {
  let fixture: ComponentFixture<Timepicker24HoursFaceComponent>;
  let component: Timepicker24HoursFaceComponent;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [Timepicker24HoursFaceComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).createComponent(Timepicker24HoursFaceComponent);

    component = fixture.componentInstance;
  });

  it('should call disableHours', () => {
    const spy = spyOn(TimepickerTime, 'disableHours');
    const time = new Date();
    const format = 24;
    const hours = TimepickerTime.getHours(format);

    component.minTime = time;
    component.maxTime = time;
    component.format = format;
    component.hoursList = hours;

    component.ngAfterContentInit();
    expect(spy).toHaveBeenCalledWith(hours, { min: time, max: time, format });
  });

  it('should generate array with 24 items', () => {
    expect(component.hoursList.length).toBe(24);
  });


  it('should emit selected hour (24hr format)', waitForAsync(() => {
    const time = 15;

    component.hourSelected.subscribe(hour => expect(hour).toBe(time));
    component.onTimeSelected(time);
  }));
});
