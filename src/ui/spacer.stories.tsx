import * as React from 'react';
import {Spacer} from './spacer';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof Spacer> = {
    title: 'Components/Spacer',
    component: Spacer,
};

export default meta;

type Story = StoryObj<typeof Spacer>;

const style: React.CSSProperties = {
    border: '1px solid red',
};

const children: Array<React.ReactNode> = [
    <div style={style}>one</div>,
    <div style={style}>
        <div>two</div>
        <div>three</div>
    </div>,
    <div style={style}>four</div>,
];

export const Horizontal: Story = {
    args: {
        h: true,
        gap: '8',
        justifyContent: 'start',
        noWrap: true,
        children: children,
    } satisfies React.ComponentProps<typeof Spacer>,
};

export const Vertical: Story = {
    args: {
        v: true,
        gap: '8',
        noWrap: true,
        children: children,
    } satisfies React.ComponentProps<typeof Spacer>,
};
