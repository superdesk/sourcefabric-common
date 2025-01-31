import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {WithSortable} from './with-sortable';
import {Tooltip} from './tooltip';

const meta: Meta<typeof Tooltip> = {
    title: 'HOC/Tooltip',
    component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof WithSortable>;

export const Main: Story = {
    render: () => {
        return (
            <div>
                <Tooltip content={'test tooltip'}>
                    <div style={{width: 30, height: 30, background: 'red'}} />
                </Tooltip>
            </div>
        );
    },
};
