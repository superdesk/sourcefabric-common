import * as React from 'react';

export interface IScreenSizeObserverDimensions {
    width: number;
    height: number;
}

interface IProps {
    children: (props: IScreenSizeObserverDimensions) => React.ReactNode;
}

interface IState {
    dimensions: IScreenSizeObserverDimensions;
}

export class WithScreenSizeObserver extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            dimensions: {width: window.innerWidth, height: window.innerHeight},
        };

        this.handleResize = this.handleResize.bind(this);
    }

    private handleResize() {
        this.setState({dimensions: {width: window.innerWidth, height: window.innerHeight}});
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        return this.props.children(this.state.dimensions);
    }
}
