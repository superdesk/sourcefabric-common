import * as React from 'react';
import {SortableContainer, SortableContainerProps, SortableElement} from 'react-sortable-hoc';

interface IProps<T> {
    items: Array<T>;
    itemTemplate: React.ComponentType<{item: T}>;
    getId(item: T): string;
    options?: SortableContainerProps;
}

interface ISortableListProps<T> {
    items: Array<T>;
    itemTemplate: IProps<T>['itemTemplate'];
}

interface ISortableItemProps<T> {
    item: T;
    itemTemplate: IProps<T>['itemTemplate'];
}

export class WithSortable<T> extends React.PureComponent<IProps<T>> {
    render() {
        const SortableList = SortableContainer((props: ISortableListProps<T>) => {
            const SortableItem = SortableElement((props: ISortableItemProps<T>) =>
                <props.itemTemplate item={props.item} />
            );

            return (
                <div>
                    {props.items.map((item, i) => (
                        <SortableItem key={this.props.getId(item)} index={i} item={item} itemTemplate={props.itemTemplate} />
                    ))}
                </div>
            )
        });

        return <SortableList itemTemplate={this.props.itemTemplate} items={this.props.items} {...this.props.options} />;
    }
}
