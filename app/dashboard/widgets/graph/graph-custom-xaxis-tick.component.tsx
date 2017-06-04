import Avatar from 'material-ui/Avatar';
import { darkWhite } from 'material-ui/styles/colors';
import * as React from 'react';
import { getWeatherIconUnicode } from '../../../common/weather-icon-unicode.service';
import { Forecast } from '../../../common/weather.interface';
import { WeatherIconComponent } from '../weather-icon.component';

interface Props {
    forecast: Forecast[];
    x?: number;
    y?: number;
    stroke?: string;
    payload?: Payload;
}

interface Payload {
    coordinate: number;
    index: number;
    isShow: boolean;
    offset: number;
    tickCoord: number;
    value: string;
}

export class GraphCustomXaxisTickComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this.state = {
            icon: getWeatherIconUnicode(this.props.forecast[this.props.payload.index].code)
        };
    }

    render() {
        return (
            <g transform={`translate(${this.props.x},${this.props.y})`}>
                <text x={-10} y={22} fill={darkWhite}>{String.fromCharCode(parseInt(this.state.icon, 16))}</text>
                <text x={-13} y={30} dy={16} fill={darkWhite}>{this.props.payload.value}</text>
            </g>
        );
    }
}
