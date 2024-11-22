import * as React from 'react';

export interface IDimensions {
    width: number;
}

interface IProps {
    children: (props: IDimensions) => React.ReactNode;
}

interface IState {
    dimensions: IDimensions;
}

export class ResizeObserverComponent extends React.PureComponent<IProps, IState> {
    private el: HTMLDivElement | null | undefined;
    private observerInstance: ResizeObserver | null;

    constructor(props: IProps) {
        super(props);

        this.state = {
            dimensions: {width: 0},
        };

        this.observerInstance = null;
    }

    componentDidMount() {
        this.observerInstance = new ResizeObserver((entries) => {
            this.setState({
                dimensions: {
                    width: Math.floor(entries[0].contentRect.width),
                },
            });
        });

        if (this.el == null) {
            throw new Error('can not be null');
        }

        this.observerInstance.observe(this.el);
    }

    componentWillUnmount() {
        if (this.el == null || this.observerInstance == null) {
            throw new Error('can not be null');
        }

        this.observerInstance.unobserve(this.el);
    }

    render() {
        const {dimensions} = this.state;
        return (
            <div
                ref={(el) => {
                    this.el = el;
                }}
            >
                {this.props.children(dimensions)}
            </div>
        );
    }
}
