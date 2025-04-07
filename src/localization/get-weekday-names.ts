import {padStart, range} from 'lodash';
import {arraySpinBackwards} from '../utils/array-spin';

/**
 * Monday = 0, Tuesday = 1
 */
export function getWeekdayNames(
    firstDayOfWeek: number,
    localeName: string,
): Array<{index: number; nameShort: string; nameLong: string}> {
    const sunday = 4; // 1970-01-04
    const all = range(sunday, sunday + 7).map((weekdayIndex) => {
        const day = padStart(weekdayIndex.toString(), 2, '0');
        const date = new Date(`1970-01-${day}`);

        return {
            index: weekdayIndex,
            nameShort: new Intl.DateTimeFormat(localeName, {weekday: 'short'}).format(date),
            nameLong: new Intl.DateTimeFormat(localeName, {weekday: 'long'}).format(date),
        };
    });

    return arraySpinBackwards(all, all.length - firstDayOfWeek);
}
