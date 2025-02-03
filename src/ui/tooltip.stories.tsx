import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {WithSortable} from './with-sortable';
import {Tooltip} from './tooltip';
import {Placement} from 'tippy.js';

const meta: Meta<typeof Tooltip> = {
    title: 'HOC/Tooltip',
    component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof WithSortable>;

export const Main: Story = {
    render: () => {
        const placements: Array<Placement> = [
            'top',
            'bottom',
            'right',
            'left',
        ]

        return (
            <div style={{display: 'flex', gap: 10, padding: 100}}>
                {
                    placements.map((placement) => (
                        <Tooltip content='The quick brown fox jumps over the lazy dog' placement={placement}>
                            <div style={{padding: 4, border: '1px solid red'}}>{placement}</div>
                        </Tooltip>
                    ))
                }
            </div>
        );
    },
};
