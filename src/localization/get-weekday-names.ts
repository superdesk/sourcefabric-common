import {padStart, range} from 'lodash';
import {arraySpinBackwards} from '../utils/array-spin';

/**
 * Monday = 0, Tuesday = 1
 */
export function getWeekdayNames(
    firstDayOfWeek: number,
    localeCode: string,
): Array<{index: number; nameShort: string; nameLong: string; nameNarrow: string}> {
    const sunday = 4; // 1970-01-04
    const all = range(sunday, sunday + 7).map((monthDay, weekdayIndex) => {
        const day = padStart(monthDay.toString(), 2, '0');
        const date = new Date(`1970-01-${day}`);

        return {
            index: weekdayIndex,

            get nameShort() {
                return new Intl.DateTimeFormat(localeCode, {weekday: 'short'}).format(date);
            },

            get nameLong() {
                return new Intl.DateTimeFormat(localeCode, {weekday: 'long'}).format(date);
            },

            get nameNarrow() {
                return new Intl.DateTimeFormat(localeCode, {weekday: 'narrow'}).format(date);
            },
        };
    });

    return arraySpinBackwards(all, all.length - firstDayOfWeek);
}
