import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {WithDivider} from './with-divider';

const meta: Meta<typeof WithDivider> = {
    title: 'HOC/WithDivider',
    component: WithDivider,
    argTypes: {
        leading: {
            name: 'boolean',
            defaultValue: false,
        },
        trailing: {
            name: 'boolean',
        },
    },
    args: {
        leading: false,
    },
};

export default meta;

type Story = StoryObj<typeof WithDivider>;

export const Main: Story = {
    argTypes: {
        leading: {
            control: 'boolean',
        },
        trailing: {
            control: 'boolean',
        },
        children: {
            control: false,
        },
        divider: {
            disable: false,
        },
    },
    args: {
        divider: <div style={{width: 100, height: 1, background: 'red'}} />,
        children: [<div>line 1</div>, <div>line 2</div>, <div>line 3</div>],
    } satisfies React.ComponentProps<typeof WithDivider>,
};
