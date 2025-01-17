import * as React from 'react';

interface IProps {
    divider: React.ReactNode;
    children: React.ReactNode;
    leading?: boolean;
    trailing?: boolean;
}

export class WithDivider extends React.Component<IProps> {
    render() {
        const {children, divider, leading, trailing} = this.props;

        if (Array.isArray(children)) {
            return (
                <>
                    {leading === true && divider}

                    {children.map((child, i) => {
                        const isLast = i === children.length - 1;

                        return (
                            <React.Fragment key={i}>
                                {child}
                                {!isLast && divider}
                            </React.Fragment>
                        );
                    })}

                    {trailing === true && divider}
                </>
            );
        } else {
            return children;
        }
    }
}
