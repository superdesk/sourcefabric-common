import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {WithSortable} from './with-sortable';
import {arrayMove} from '../data-structures/array-move';

const meta: Meta<typeof WithSortable> = {
    title: 'HOC/WithSortable',
    component: WithSortable,
    decorators: [
        (Story) => (
            <div style={{width: 300}}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof WithSortable>;

export const Main: Story = {
    render: () => {
        const [items, setItems] = React.useState([
            {name: 'item 1'},
            {name: 'item 2'},
            {name: 'item 3'},
            {name: 'item 4'},
            {name: 'item 5'},
        ]);

        return (
            <WithSortable
                items={items}
                getId={(item) => item.name}
                itemTemplate={({item}) => <div style={{margin: 4, border: '1px solid red'}}>{item.name}</div>}
                options={{
                    onSortEnd: ({oldIndex, newIndex}) => {
                        setItems(arrayMove(items, oldIndex, newIndex));
                    },
                }}
            />
        );
    },
};
