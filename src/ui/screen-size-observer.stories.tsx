import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {IDimensions, WithScreenSizeObserver} from './screen-size-observer';

const meta: Meta<typeof WithScreenSizeObserver> = {
    title: 'HOC/WithScreenSizeObserver',
    component: WithScreenSizeObserver,
};

export default meta;

type Story = StoryObj<typeof WithScreenSizeObserver>;

const style: React.CSSProperties = {
    display: 'inline-block',
    border: '1px solid red',
};

const children: (dimensions: IDimensions) => React.ReactNode = (dimensions) => (
    <div style={style}>
        <span>
            {dimensions.width}x{dimensions.height}
        </span>
    </div>
);

export const Main: Story = {
    args: {
        children: children,
    } satisfies React.ComponentProps<typeof WithScreenSizeObserver>,
};
