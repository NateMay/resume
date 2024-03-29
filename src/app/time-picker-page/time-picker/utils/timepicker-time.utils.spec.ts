import { disableHours, disableMinutes, getHours, getMinutes } from './timepicker-time.utils';

describe('TimepickerTime', () => {
  describe('Hour', () => {
    const min = new Date(2018, 5, 5, 10);
    const max = new Date(2018, 5, 5, 15);

    it('should return 12 hours', () => {
      const hours = getHours(12);
      for (let i = 0; i < hours.length; i++) {
        const angleStep = 30;
        expect(hours[i]).toEqual({ time: i + 1, angle: (i + 1) * angleStep });
      }
    });

    it('should return 24 hours', () => {
      const hours = getHours(24);
      for (let i = 0; i < hours.length; i++) {
        const angleStep = 30;
        const time = i + 1;

        expect(hours[i]).toEqual({ time: time === 24 ? 0 : time, angle: time * angleStep });
      }
    });

    // it('should disable hours if min time present (12 hours format)', () => {
    //   const hours = getHours(12);
    //   let disabledHours = disableHours(hours, {
    //     min,
    //     max: undefined,
    //     format: 12,
    //     period: TimePeriod.AM
    //   }).filter(h => h.disabled);

    //   expect(disabledHours.length).toBe(10);
    //   for (let i = 0; i < disabledHours.length; i++) {
    //     expect(disabledHours[i].time).toBe(disabledHours[i].time === 12 ? 12 : i + 1);
    //   }

    //   disabledHours = disableHours(hours, {
    //     min,
    //     max: undefined,
    //     format: 12,
    //     period: TimePeriod.PM
    //   }).filter(h => h.disabled);

    //   expect(disabledHours.length).toBe(0);
    // });

    // it('should disable hours if max time present (12 hours format)', () => {
    //   const hours = getHours(12);
    //   let disabledHours = disableHours(hours, {
    //     min: undefined,
    //     max,
    //     format: 12,
    //     period: TimePeriod.AM
    //   }).filter(h => h.disabled);

    //   expect(disabledHours.length).toBe(0);


    //   disabledHours = disableHours(hours, {
    //     min: undefined,
    //     max,
    //     format: 12,
    //     period: TimePeriod.PM
    //   }).filter(h => h.disabled);

    //   expect(disabledHours.length).toBe(8);
    //   for (let i = 0; i < disabledHours.length; i++) {
    //     expect(disabledHours[i].time).toBe(i + 4);
    //   }
    // });

    // it('should disable hours if min and max time present (24 hours format)', () => {
    //   const hours = getHours(24);
    //   const disabledHours = disableHours(hours, {
    //     min,
    //     max,
    //     format: 24
    //   }).filter(h => h.disabled);

    //   expect(disabledHours.length).toBe(18);
    // });

    it('should return hours without disabling if nor min and max values were provided', () => {
      const hours = getHours(24);
      const disabledHours = disableHours(hours, {
        min: undefined,
        max: undefined,
        format: 24
      }).filter(h => h.disabled);

      expect(disabledHours.length).toBe(0);
    });
  });

  describe('Minute', () => {
    const min = new Date(2018, 5, 5, 1, 10);
    const max = new Date(2018, 5, 5, 3, 50);
    const minutes = getMinutes();


    it('should return array with 60 minutes by default', () => {
      const angleStep = 360 / 60;

      expect(minutes.length).toBe(60);

      for (let i = 0; i < minutes.length; i++) {
        const angle = i * angleStep;

        expect(minutes[i]).toEqual({ time: i, angle: angle !== 0 ? angle : 360 });
      }
    });

    it('should return minutes with gap in 5 minutes', () => {
      const gap = 5;
      const minutesWithGap = getMinutes(gap);
      const angleStep = 360 / 60;

      expect(minutesWithGap.length).toBe(12);

      for (let i = 0; i < minutesWithGap.length; i++) {
        const angle = i * angleStep * gap;

        expect(minutesWithGap[i]).toEqual({ time: i * gap, angle: angle !== 0 ? angle : 360 });
      }
    });

    // it('should disable minutes with min time', () => {
    //   let disabledMinutes = disableMinutes(minutes, 1, {
    //     min,
    //     max: undefined,
    //     format: 12,
    //     period: TimePeriod.AM
    //   }).filter(m => m.disabled);

    //   expect(disabledMinutes.length).toBe(10);
    //   for (let i = 0; i < disabledMinutes.length; i++) {
    //     const time = disabledMinutes[i].time;
    //     expect(time).toBe(i);
    //   }

    //   disabledMinutes = disableMinutes(minutes, 2, {
    //     min,
    //     max: undefined,
    //     format: 12,
    //     period: TimePeriod.AM
    //   }).filter(m => m.disabled);

    //   expect(disabledMinutes.length).toBe(0);

    //   disabledMinutes = disableMinutes(minutes, 0, {
    //     min,
    //     max: undefined,
    //     format: 12,
    //     period: TimePeriod.AM
    //   }).filter(m => m.disabled);

    //   expect(disabledMinutes.length).toBe(60);
    // });

    // it('should disable minutes with max time', () => {
    //   let disabledMinutes = disableMinutes(minutes, 3, {
    //     min: undefined,
    //     max,
    //     format: 12,
    //     period: TimePeriod.AM
    //   }).filter(m => m.disabled);

    //   expect(disabledMinutes.length).toBe(9);
    //   for (let i = 0; i < disabledMinutes.length; i++) {
    //     const time = i + 51;
    //     expect(disabledMinutes[i].time).toBe(time);
    //   }

    //   disabledMinutes = disableMinutes(minutes, 2, {
    //     min: undefined,
    //     max,
    //     format: 12,
    //     period: TimePeriod.AM
    //   }).filter(m => m.disabled);

    //   expect(disabledMinutes.length).toBe(0);

    //   disabledMinutes = disableMinutes(minutes, 4, {
    //     min: undefined,
    //     max,
    //     format: 12,
    //     period: TimePeriod.AM
    //   }).filter(m => m.disabled);

    //   expect(disabledMinutes.length).toBe(60);
    // });

    it('should return minutes without disabling if nor min and max values were provided', () => {
      const disabledHours = disableMinutes(minutes, 1, {
        min: undefined,
        max: undefined,
        format: 24
      }).filter(h => h.disabled);

      expect(disabledHours.length).toBe(0);
    });
  });
});
