import * as React from 'react';
import {SortableContainer, SortableContainerProps, SortableElement} from 'react-sortable-hoc';

interface IProps<T> extends ISortableListProps<T> {
    getId(item: T): string;
    options?: SortableContainerProps;
}

interface ISortableListProps<T> {
    items: Array<T>;
    itemTemplate: React.ComponentType<{item: T}>;
}

interface ISortableItemProps<T> {
    item: T;
    itemTemplate: ISortableListProps<T>['itemTemplate'];
}

export class WithSortable<T> extends React.PureComponent<IProps<T>> {
    SortableList: React.ComponentClass<ISortableListProps<T> & SortableContainerProps>;

    constructor(props: IProps<T>) {
        super(props);

        this.SortableList = SortableContainer((props: ISortableListProps<T>) => {
            const SortableItem = SortableElement((props: ISortableItemProps<T>) => {
                const ItemTemplate = props.itemTemplate;

                return <ItemTemplate item={props.item} />;
            });

            return (
                <div>
                    {props.items.map((item, i) => (
                        <SortableItem
                            key={this.props.getId(item)}
                            index={i}
                            item={item}
                            itemTemplate={props.itemTemplate}
                        />
                    ))}
                </div>
            );
        });
    }

    render() {
        const {SortableList} = this;

        return <SortableList itemTemplate={this.props.itemTemplate} items={this.props.items} {...this.props.options} />;
    }
}
