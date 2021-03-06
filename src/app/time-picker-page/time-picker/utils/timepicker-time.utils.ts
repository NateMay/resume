import { forceZero } from 'src/app/functions/dateFromTime';
import { ClockFaceTime } from '../models/clock-face-time.interface';
import { DisabledTimeConfig } from '../models/disabled-time-config.interface';
import { TimeAdapter } from '../services/time-adapter';


export function getHours(format: number): ClockFaceTime[] {
  return Array(format).fill(1).map((v, i) => {
    const angleStep = 30;
    const time = v + i;
    const angle = angleStep * time;
    return { time: time === 24 ? 0 : time, angle };
  });
}

export function disableHours(hours: ClockFaceTime[], config: DisabledTimeConfig): ClockFaceTime[] {
  if (config.min || config.max) {

    return hours.map(value => {
      const hour = config.format === 24 ? value.time : TimeAdapter.formatHour(value.time, config.format, config.period);

      const currentTime = `${forceZero(hour % 12)}:00 ${hour > 11 || hour === 0 ? 'pm' : 'am'}`;

      return {
        ...value,
        disabled: !TimeAdapter.isTimeAvailable(currentTime, config.min, config.max, 'hours')
      };
    });
  }
  return hours;
}

export function getMinutes(gap = 1): ClockFaceTime[] {
  const minutesCount = 60;
  const angleStep = 360 / minutesCount;
  const minutes = [];

  for (let i = 0; i < minutesCount; i++) {
    const angle = angleStep * i;
    if (i % gap === 0) {
      minutes.push({ time: i, angle: angle !== 0 ? angle : 360 });
    }
  }
  return minutes;
}

export function disableMinutes(minutes: ClockFaceTime[], selectedHour: number, config: DisabledTimeConfig) {
  if (config.min || config.max) {

    const hour = TimeAdapter.formatHour(selectedHour, config.format, config.period);

    return minutes.map(value => {
      const currentTime = `${forceZero(hour)}:${value.time} am`
      return {
        ...value,
        disabled: !TimeAdapter.isTimeAvailable(currentTime, config.min, config.max, 'minutes')
      };
    });
  }
  return minutes;
}
