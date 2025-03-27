import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {MonthCalendar} from './month-calendar';

const meta: Meta<typeof MonthCalendar> = {
    title: 'HOC/MonthCalendar',
    component: MonthCalendar,
};

export default meta;

type Story = StoryObj<typeof MonthCalendar>;

export const Main: Story = {
    render: () => {
        return (
            <div>
                <MonthCalendar
                    month={new Date()}
                    firstDayOfWeek={0}
                    locale="en"
                    dayTemplate={(props) => (
                        <span
                            style={{cursor: 'pointer'}}
                            onClick={() => {
                                alert(`Clicked on ${props.day.date.toLocaleDateString()}`);
                            }}
                        >
                            {props.day.day}
                        </span>
                    )}
                />
            </div>
        );
    },
};
