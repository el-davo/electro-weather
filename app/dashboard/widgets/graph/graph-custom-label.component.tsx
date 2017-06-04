import { darkWhite } from 'material-ui/styles/colors';
import * as React from 'react';

interface Props {
    x?: number;
    y?: number;
    stroke?: string;
    value?: number;
}

export class GraphCustomLabelComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <text
                color={darkWhite}
                x={this.props.x}
                y={this.props.y}
                dy={-10}
                fill={darkWhite}
                fontSize={11}
                textAnchor="middle">
                {this.props.value}&deg;
            </text>
        );
    }
}
