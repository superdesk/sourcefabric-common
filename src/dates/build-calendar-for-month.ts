import {startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, getMonth} from 'date-fns';
import {chunk} from 'lodash';
import {getMonthNames} from '../localization/get-month-names';
import {getWeekdayNames} from '../localization/get-weekday-names';

type IWeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface IMonthCalendarDay {
    date: Date;
    day: number;
    dayFromOtherMonth: boolean;
}

interface IResult {
    monthName: string;
    weekdays: Array<string>;
    weeks: Array<Array<IMonthCalendarDay>>;
}

export function buildCalendarForMonth(month: Date, locale: {code: string; weekStartsOn: number}): IResult {
    const firstDayOfMonth = startOfMonth(month);
    const lastDayOfMonth = endOfMonth(month);
    const {weekStartsOn} = locale;
    const thisMonth = getMonth(month);

    const days = eachDayOfInterval({
        start: startOfWeek(firstDayOfMonth, {weekStartsOn: weekStartsOn as IWeekStartsOn}),
        end: endOfWeek(lastDayOfMonth, {weekStartsOn: weekStartsOn as IWeekStartsOn}),
    }).map((date) => ({date, day: date.getDate(), dayFromOtherMonth: getMonth(date) !== thisMonth}));

    const weeks = chunk(days, 7);

    return {
        weeks,
        monthName: getMonthNames(locale.code, 'long')[getMonth(month)],
        weekdays: getWeekdayNames(weekStartsOn, locale.code).map(({nameShort}) => nameShort),
    };
}
