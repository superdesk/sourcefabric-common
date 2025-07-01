import * as React from 'react';
import {describe, it} from 'mocha';
import * as assert from 'assert';
import {mount} from 'enzyme';
import {WithSortable} from './with-sortable';
import {arrayMove, SortEvent} from 'react-sortable-hoc';

interface IState {
    items: Array<{id: string; name: string}>;
}

class SortableListDemo extends React.PureComponent<{}, IState> {
    constructor(props: object) {
        super(props);

        this.state = {
            items: [
                {
                    id: 'one',
                    name: 'one',
                },
                {
                    id: 'two',
                    name: 'two',
                },
                {
                    id: 'three',
                    name: 'three',
                },
            ],
        };
    }

    render() {
        return (
            <WithSortable
                items={this.state.items}
                getId={(item) => item.id}
                itemTemplate={({item}) => (
                    <div data-test-id={item.id} style={{height: 40}}>
                        {this.state.items.findIndex((x) => x.id === item.id) % 2 === 0
                            ? `Even index position: ${item.name}`
                            : `Odd index position: ${item.name}`}
                    </div>
                )}
                options={{
                    onSortEnd: ({oldIndex, newIndex}) => {
                        this.setState({
                            items: arrayMove(this.state.items, oldIndex, newIndex),
                        });
                    },
                }}
            />
        );
    }
}

describe('ui.withSortable', () => {
    it('updates item template after re-ordering', () => {
        const wrapper = mount(<SortableListDemo />);

        assert.equal(wrapper.find('[data-test-id="one"]').text(), 'Even index position: one');

        wrapper
            .find(WithSortable)
            ?.props()
            ?.options?.onSortEnd?.(
                {
                    oldIndex: 0,
                    newIndex: 1,
                    collection: 1,
                    isKeySorting: true,
                    nodes: [],
                },
                {} as SortEvent,
            );

        wrapper.update();

        assert.equal(wrapper.find('[data-test-id="one"]').text(), 'Odd index position: one');
    });
});
