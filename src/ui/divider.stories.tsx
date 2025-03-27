import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Divider} from './divider';

const meta: Meta<typeof Divider> = {
    title: 'HOC/Divider',
    component: Divider,
    decorators: [
        (Story) => (
            <div style={{width: 300}}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Vertical: Story = {
    render: () => {
        return (
            <div style={{display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 4}}>
                <div>item 1</div>
                <Divider color="red" />
                <div>item 2</div>
                <Divider color="red" />
                <div>item 3</div>
                <Divider color="red" />
                <div>item 4</div>
            </div>
        );
    },
};

export const Horizontal: Story = {
    render: () => {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'center',
                    gap: 4,
                }}
            >
                <div>item 1</div>
                <Divider color="red" horizontal />
                <div>item 2</div>
                <Divider color="red" horizontal />
                <div>item 3</div>
                <Divider color="red" horizontal />
                <div>item 4</div>
            </div>
        );
    },
};
