import * as React from 'react';

export interface IPropsSpacer {
    h?: boolean; // horizontal
    v?: boolean; // vertical
    gap: '0' | '4' | '8' | '16' | '32' | '64';
    justifyContent?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly' | 'stretch';
    alignItems?: 'start' | 'end' | 'center' | 'stretch';
    noGrow?: boolean;

    /**
     * Will not wrap children in div elements.
     * `noGrow` prop would then not be relevant.
     */
    noWrap?: boolean;

    style?: React.CSSProperties;

    /** allowing a single node to support fragments */
    children: Array<React.ReactNode> | React.ReactNode;

    customRef?: React.LegacyRef<HTMLDivElement>;

    'data-test-id'?: string;
}

export class Spacer extends React.PureComponent<IPropsSpacer> {
    render() {
        const {h, v, gap, justifyContent, alignItems, noGrow, noWrap} = this.props;

        const justifyContentDefault: IPropsSpacer['justifyContent'] = h ? 'space-between' : 'start';
        const alignItemsDefault: IPropsSpacer['alignItems'] = h ? 'center' : 'start';
        const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];

        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: v ? 'column' : 'row',
                    gap: `${gap}px`,
                    justifyContent: justifyContent ?? justifyContentDefault,
                    alignItems: alignItems ?? alignItemsDefault,
                    width: noGrow === true ? undefined : '100%',
                    ...(this.props.style ?? {}),
                }}
                data-test-id={this.props['data-test-id']}
                ref={this.props.customRef}
            >
                {children.map((el, i) =>
                    noWrap ? (
                        el
                    ) : (
                        <div
                            key={i}
                            style={{
                                width: noGrow === true ? undefined : '100%',
                            }}
                        >
                            {el}
                        </div>
                    ),
                )}
            </div>
        );
    }
}

/**
 * Renders a standalone spacing block - similar to <br />
 */
export interface IPropsSpacerBlock {
    h?: boolean; // horizontal
    v?: boolean; // vertical
    gap: '4' | '8' | '16' | '32' | '64';
}

export class SpacerBlock extends React.PureComponent<IPropsSpacerBlock> {
    render() {
        const {gap, h, v} = this.props;

        return (
            <span
                style={{
                    display: h === true ? 'inline-block' : 'block',
                    width: h === true ? `${gap}px` : undefined,
                    height: v === true ? `${gap}px` : undefined,
                }}
            />
        );
    }
}

export function isSpacerTreeEmpty(result: JSX.Element | Array<JSX.Element> | false): boolean {
    if (Array.isArray(result)) {
        return React.Children.toArray(result).every((child) => isSpacerTreeEmpty(child));
    } else if (result == null || result == false) {
        return true;
    } else if (result?.type?.displayName === 'Spacer' || result?.type?.name === 'Spacer') {
        return React.Children.toArray(result.props.children).every((child) => isSpacerTreeEmpty(child));
    } else {
        return false;
    }
}
