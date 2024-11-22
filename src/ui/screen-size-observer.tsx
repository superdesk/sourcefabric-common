import * as React from 'react';

export interface IDimensions {
    width: number;
    height: number;
}

interface IProps {
    children: (props: IDimensions) => React.ReactNode;
}

interface IState {
    dimensions: IDimensions;
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
