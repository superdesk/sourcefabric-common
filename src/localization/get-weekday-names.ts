import {arraySpinBackwards} from '../utils/array-spin';

/**
 * Monday = 0, Tuesday = 1
 */
export function getWeekdayNames(
    length: 'short' | 'long',
    firstDayOfWeek: number,
    localeName: string,
): Array<{index: number; label: string}> {
    const all = [
        {
            index: 0,
            label: new Intl.DateTimeFormat(localeName, {weekday: length}).format(new Date('1970-01-11')),
        }, // Sun
        {
            index: 1,
            label: new Intl.DateTimeFormat(localeName, {weekday: length}).format(new Date('1970-01-05')),
        }, // Mon
        {
            index: 2,
            label: new Intl.DateTimeFormat(localeName, {weekday: length}).format(new Date('1970-01-06')),
        }, // Tue
        {
            index: 3,
            label: new Intl.DateTimeFormat(localeName, {weekday: length}).format(new Date('1970-01-07')),
        }, // Wed
        {
            index: 4,
            label: new Intl.DateTimeFormat(localeName, {weekday: length}).format(new Date('1970-01-08')),
        }, // Thu
        {
            index: 5,
            label: new Intl.DateTimeFormat(localeName, {weekday: length}).format(new Date('1970-01-09')),
        }, // Fri
        {
            index: 6,
            label: new Intl.DateTimeFormat(localeName, {weekday: length}).format(new Date('1970-01-10')),
        }, // Sat
    ];

    return arraySpinBackwards(all, all.length - firstDayOfWeek);
}
