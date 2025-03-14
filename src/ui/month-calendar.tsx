import * as React from 'react';
import {buildCalendarForMonth, IMonthCalendarDay} from '../dates/build-calendar-for-month';

interface IProps {
    firstDayOfWeek: number;
    locale: string;
    dayTemplate: React.ComponentType<{day: IMonthCalendarDay}>;
    monthNameTemplate?: React.ComponentType<{monthName: string}>;
    weekdaysTemplate?: React.ComponentType<{weekdays: Array<string>}>;
}

const defaultMonthNameTemplate: Required<IProps>['monthNameTemplate'] = (props) => (
    <h3 style={{textAlign: 'center'}}>{props.monthName}</h3>
);

const defaultWeekdaysTemplate: Required<IProps>['weekdaysTemplate'] = (props) => (
    <>
        {props.weekdays.map((day) => (
            <div key={day}>{day}</div>
        ))}
    </>
);

export class MonthCalendar extends React.PureComponent<IProps> {
    render() {
        const {firstDayOfWeek, locale} = this.props;
        const month = buildCalendarForMonth(new Date(), {weekStartsOn: firstDayOfWeek, code: locale});
        const DayTemplate = this.props.dayTemplate;
        const MonthNameTemplate = this.props.monthNameTemplate ?? defaultMonthNameTemplate;
        const WeekdaysTemplate = this.props.weekdaysTemplate ?? defaultWeekdaysTemplate;

        return (
            <div style={{textTransform: 'capitalize'}}>
                <MonthNameTemplate monthName={month.monthName} />

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(7, 2.8em)',
                        gridAutoRows: '2.8em',
                        gap: '0.2em',
                        placeItems: 'center',
                    }}
                >
                    <WeekdaysTemplate weekdays={month.weekdays} />

                    {month.weeks.map((days, weekIndex) => (
                        <React.Fragment key={weekIndex}>
                            {days.map((day, dayIndex) => (
                                <DayTemplate day={day} key={dayIndex} />
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        );
    }
}
