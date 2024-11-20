import * as React from 'react';
import {IDimensions, ResizeObserverComponent} from './resize-observer';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof ResizeObserverComponent> = {
    title: 'HOC/ResizeObserverComponent',
    component: ResizeObserverComponent,
};

export default meta;

type Story = StoryObj<typeof ResizeObserverComponent>;

const style: React.CSSProperties = {
    border: '1px solid red',
    position: 'absolute',
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const children: (dimensions: IDimensions) => React.ReactNode = (dimensions) => (
    <div style={style}>
        <span>{dimensions.width}</span>
    </div>
);

export const Main: Story = {
    args: {
        children: children,
    } satisfies React.ComponentProps<typeof ResizeObserverComponent>,
};
