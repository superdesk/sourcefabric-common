import * as React from 'react';

interface IProps {
    horizontal?: boolean;
    thickness?: string;
    length?: string;
    color: string;
}

/**
 * Only supports being rendered inside a flexbox.
 * Supports centering in a dynamically sized element.
 */
export class Divider extends React.PureComponent<IProps> {
    render() {
        const {horizontal, color} = this.props;
        const thickness = this.props.thickness ?? '1px';
        const length = this.props.length ?? '100%';

        return (
            <div style={{alignSelf: 'stretch', display: 'flex', alignItems: 'center'}}>
                <div
                    style={{
                        width: horizontal ? length : thickness,
                        height: horizontal ? thickness : length,
                        background: color,
                    }}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}
