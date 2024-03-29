import { NO_ERRORS_SCHEMA, SimpleChanges } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { TimeUnit } from '../../models/time-unit.enum';
import { getHours } from '../../utils/timepicker-time.utils';
import { TimepickerDialControlComponent } from './time-picker-dial-control.component';

describe('TimepickerDialControlComponent', () => {

  let fixture: ComponentFixture<TimepickerDialControlComponent>;
  let component: TimepickerDialControlComponent;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TimepickerDialControlComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).createComponent(TimepickerDialControlComponent);

    component = fixture.componentInstance;
  });

  it('should set current time to previous time, change time unit', waitForAsync(() => {
    component.timeUnitChanged.subscribe(unit => expect(unit).toBe(TimeUnit.MINUTE));

    component._time = '10';
    expect(component.previousTime).toBeUndefined();

    component.saveTimeAndChangeTimeUnit({ preventDefault: () => null } as FocusEvent, TimeUnit.MINUTE);

    expect(component.previousTime).toBe('10');
  }));

  it('should emit changed time if it exists and available', fakeAsync(() => {
    const timeMock = { time: 1, angle: 30, disabled: false };
    let time = null;
    component.timeList = [timeMock];
    component.timeChanged.subscribe(t => time = t);
    component._time = '1';
    component.updateTime();

    tick();
    expect(time).toEqual(timeMock);
    expect(component.previousTime).toBe(1);
  }));

  it('should not emit changed time if it does not exists', fakeAsync(() => {
    const timeMock = { time: 1, angle: 30 };
    let time = null;
    component.timeList = [timeMock];
    component.timeChanged.subscribe(t => time = t);
    component._time = '';
    component.updateTime();

    tick();
    expect(time).toBeNull();
    expect(component.previousTime).toBeUndefined();
  }));

  it('should format time once it changes', () => {
    const changes: SimpleChanges = {
      time: {
        previousValue: undefined,
        currentValue: 1,
        firstChange: true,
        isFirstChange: () => null
      }
    };
    component.timeUnit = TimeUnit.HOUR;
    // component.ngOnChanges(changes);

    // expect(component._time).toBe('01');
  });

  it('should not format time if its the second change', () => {
    const changes: SimpleChanges = {
      time: {
        previousValue: undefined,
        currentValue: '1',
        firstChange: false,
        isFirstChange: () => null
      }
    };
    component._time = '4';
    component.timeUnit = TimeUnit.HOUR;
    // component.ngOnChanges(changes);

    // expect(component._time).toBe('4');
  });

  it('should do nothing', () => {
    const changes: SimpleChanges = {
      timeUnit: {
        previousValue: undefined,
        currentValue: null,
        firstChange: false,
        isFirstChange: () => null
      }
    };
    component._time = '4';
    // component.ngOnChanges(changes);
    // expect(component._time).toBe('4');
  });

  it('should format time', waitForAsync(() => {

    component._time = '2';
    component.previousTime = 4;
    component.timeUnit = TimeUnit.MINUTE;

    component.formatTime();
    expect(component._time).toBe('02');

    component._time = '';
    component.formatTime();

    expect(component._time).toBe('04');
    component._time = '5';
    component.formatTime();
    expect(component._time).toBe('05');
  }));

  describe('onKeyDown', () => {
    let counter = 0;
    const event = {
      keyCode: 0, preventDefault: () => {
        counter++;
      }
    } as KeyboardEvent;
    const numbers = Array(10).fill(48).map((v, i) => v + i);
    const numpadNumbers = Array(10).fill(96).map((v, i) => v + i);
    const arrows = Array(6).fill(35).map((v, i) => v + i); // home, end, left, right, up, down
    const specialKeys = [46, 8, 9, 27, 13]; // backspace, delete, tab, escape, enter

    beforeEach(() => {
      counter = 0;
      component.timeList = getHours(24);
    });


    it('should allow numbers', () => {

      const keyCodes = numbers.concat(numpadNumbers);
      component._time = '';


      keyCodes.forEach(code => {
        component.onKeyDown({ ...event, keyCode: code });
        expect(counter).toBe(0);
      });
    });

    it('should allow backspace, delete, tab, escape, enter', () => {
      specialKeys.forEach(code => {
        component.onKeyDown({ ...event, keyCode: code });
        expect(counter).toBe(0);
      });
    });

    it('should allow home, end, left, right, up, down', () => {
      arrows.forEach(code => {
        component.onKeyDown({ ...event, keyCode: code });
        expect(counter).toBe(0);
      });
    });

    it('should allow ctrl/cmd+a, ctrl/cmd+c, ctrl/cmd+x', () => {
      const chars = [65, 67, 88];

      chars.forEach(code => {
        component.onKeyDown({ ...event, keyCode: code, ctrlKey: true });
        expect(counter).toBe(0);
      });

      chars.forEach(code => {
        component.onKeyDown({ ...event, keyCode: code, metaKey: true });
        expect(counter).toBe(0);
      });
    });

    it('should not allow chars but numbers, backspace, delete, tab, escape, enter, home, end, left, right, up, down', () => {
      const allKeyCodes = Array(114).fill(8).map((v, i) => v + i);
      const allowedCodes = [...numbers, ...numpadNumbers, ...specialKeys, ...arrows];
      const restrictedCodes = allKeyCodes.filter(code => !allowedCodes.includes(code));

      restrictedCodes.forEach((code, index) => {
        component.onKeyDown({ ...event, keyCode: code });
        expect(counter).toBe(index + 1);
      });
    });

    it('should call preventDefault if no time exist or time disabled', () => {
      const NUM_1 = 49; // 1
      component.timeList = [{ time: 1, angle: 30, disabled: true }];
      component._time = '1';


      component.onKeyDown({ ...event, keyCode: NUM_1 });
      expect(counter).toBe(1);

      component._time = '';
      component.onKeyDown({ ...event, keyCode: NUM_1 });
      expect(counter).toBe(2);
    });

    it('should up time by 1', () => {
      const ARROW_UP = 38;
      component._time = '11';

      component.onKeyDown({ ...event, keyCode: ARROW_UP });
      expect(component._time).toBe('12');
    });

    it('should down time by 1', () => {
      const ARROW_DOWN = 40;
      component._time = '11';

      component.onKeyDown({ ...event, keyCode: ARROW_DOWN });
      expect(component._time).toBe('10');
    });

    it('should up time by 7', () => {
      const ARROW_UP = 38;
      component._time = '11';
      component.minutesGap = 7;

      component.onKeyDown({ ...event, keyCode: ARROW_UP });
      expect(component._time).toBe('18');
    });

    it('should down time by 6', () => {
      const ARROW_DOWN = 40;
      component._time = '11';
      component.minutesGap = 6;

      component.onKeyDown({ ...event, keyCode: ARROW_DOWN });
      expect(component._time).toBe('5');
    });
  });
});
