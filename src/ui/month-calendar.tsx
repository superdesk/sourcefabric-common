import * as React from 'react';
import {buildCalendarForMonth, IMonthCalendarDay} from '../dates/build-calendar-for-month';

interface IProps {
    firstDayOfWeek: number;
    locale: string;
    month: Date;
    dayTemplate: React.ComponentType<{day: IMonthCalendarDay}>;
    monthNameTemplate?: React.ComponentType<{monthName: string; year: number}>;
    weekdaysTemplate?: React.ComponentType<{weekdays: Array<string>}>;
    'data-test-id'?: string;
    'data-test-value'?: string;
}

const defaultMonthNameTemplate: Required<IProps>['monthNameTemplate'] = (props) => (
    <div data-test-id="heading">
        <h3 style={{textAlign: 'center', margin: 0, fontSize: '1.4rem', lineHeight: '1em'}}>{props.monthName}</h3>
        <div style={{textAlign: 'center'}}>{props.year}</div>
    </div>
);

const defaultWeekdaysTemplate: Required<IProps>['weekdaysTemplate'] = (props) => (
    <>
        {props.weekdays.map((day) => (
            <strong key={day}>{day}</strong>
        ))}
    </>
);

export class MonthCalendar extends React.PureComponent<IProps> {
    render() {
        const {firstDayOfWeek, locale} = this.props;
        const month = buildCalendarForMonth(this.props.month, {weekStartsOn: firstDayOfWeek, code: locale});
        const DayTemplate = this.props.dayTemplate;
        const MonthNameTemplate = this.props.monthNameTemplate ?? defaultMonthNameTemplate;
        const WeekdaysTemplate = this.props.weekdaysTemplate ?? defaultWeekdaysTemplate;

        return (
            <div
                style={{
                    textTransform: 'capitalize',
                    display: 'inline-flex',
                    flexDirection: 'column',
                }}
                data-test-id={this.props['data-test-id']}
                data-test-value={this.props['data-test-value']}
            >
                <MonthNameTemplate monthName={month.monthName} year={this.props.month.getFullYear()} />

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
