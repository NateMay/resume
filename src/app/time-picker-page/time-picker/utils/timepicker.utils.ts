

export function isSameOrAfter(time: Date, compareWith: Date, unit: 'hours' | 'minutes' = 'minutes'): boolean {
  if (unit === 'hours') return time.getHours() >= compareWith.getHours();
  if (unit === 'minutes') return time.getMinutes() >= compareWith.getMinutes();
}

export function isSameOrBefore(time: Date, compareWith: Date, unit: 'hours' | 'minutes' = 'minutes'): boolean {
  if (unit === 'hours') return time.getHours() <= compareWith.getHours();
  if (unit === 'minutes') return time.getMinutes() <= compareWith.getMinutes();
}

export function isBetween(time: Date, before: Date, after: Date, unit: 'hours' | 'minutes' = 'minutes'): boolean {
  if (unit === 'hours') return isSameOrBefore(time, after, unit) && isSameOrAfter(time, before, unit);
  if (unit === 'minutes') return isSameOrBefore(time, after) && isSameOrAfter(time, before);
}
