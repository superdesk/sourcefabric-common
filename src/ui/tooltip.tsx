import * as React from 'react';
import Tippy from '@tippyjs/react';
import {Placement} from 'tippy.js';

interface IProps {
    content: string | null;
    children: React.ReactNode;
    placement?: Placement;
    disabled?: boolean;
}

export class Tooltip extends React.PureComponent<IProps> {
    render() {
        const {content, children, placement} = this.props;
        const disabled = this.props.disabled ?? false;

        return (
            <Tippy content={disabled ? null : content} placement={placement}>
                {children as React.ReactElement}
            </Tippy>
        );
    }
}
