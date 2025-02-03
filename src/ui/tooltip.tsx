import * as React from 'react';
import tippy, {Instance, Placement} from 'tippy.js';

interface IProps {
    content: string | undefined | null;
    children: React.ReactNode;
    placement?: Placement;
    disabled?: boolean;
}

export class Tooltip extends React.PureComponent<IProps> {
    private id: string;
    private instance: Instance | null;

    constructor(props: IProps) {
        super(props);

        this.id = 'tooltip-' + Math.random().toString().slice(2);
        this.instance = null;
    }

    private setupTooltip() {
        if (this.instance == null) {
            this.instance = tippy('#' + this.id, {
                placement: this.props.placement,
            })[0];

            if (this.props.content != null) {
                this.instance.setContent(this.props.content);
            } else {
                this.instance.hide();
                this.instance.disable();
            }
        }

        const willBeEnabled = this.props.content != null && this.props.disabled !== true;
        const isEnabled = this.instance.state.isEnabled;

        if (isEnabled && willBeEnabled) {
            this.instance.setContent(this.props.content);
        } else if (isEnabled) {
            // enabled now, but needs to be disabled
            this.instance.hide();
            this.instance.disable();
        } else if (willBeEnabled) {
            // disabled now, but needs to be enabled
            this.instance.setContent(this.props.content);
            this.instance.enable();
            this.instance.show();
        }
    }

    componentDidMount(): void {
        this.setupTooltip();
    }

    componentDidUpdate(): void {
        this.setupTooltip();
    }

    render() {
        return (
            <div id={this.id} style={{display: 'inline-flex'}}>
                {this.props.children}
            </div>
        );
    }
}
