import Avatar from 'material-ui/Avatar';
import { LineChart, XAxis, Line, ResponsiveContainer } from 'recharts';
import { darkWhite } from 'material-ui/styles/colors';
import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid/lib/index';
import { Weather } from '../../../common/weather.interface';
import { WeatherIconComponent } from '../weather-icon.component';
import { GraphCustomLabelComponent } from './graph-custom-label.component';
import { GraphCustomXaxisTickComponent } from './graph-custom-xaxis-tick.component';

interface Props {
    weather: Weather;
}

const style = {
    table: {
        background: 'none',
        color: darkWhite
    },
    tableRow: {
        color: darkWhite,
        fontWeight: 'bold'
    }
};

export class FutureWeatherGraphComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Grid fluid style={{ padding: 0 }}>
                <Col xs={12} sm={12} md={12}>
                    <ResponsiveContainer width={'100%'} height={200}>
                        <LineChart width={600} height={200} data={this.props.weather.query.results.channel.item.forecast.slice(0, 5)}
                            margin={{ top: 20, left: 20, right: 20, bottom: 0 }}>
                            <XAxis
                                dataKey="day"
                                height={60}
                                interval={0}
                                tick={<GraphCustomXaxisTickComponent forecast={this.props.weather.query.results.channel.item.forecast} />} />
                            <Line
                                animationDuration={1000}
                                type="monotone"
                                dataKey="high"
                                stroke={darkWhite}
                                dot={{ strokeWidth: 0.5 }}
                                label={<GraphCustomLabelComponent />} />
                            <Line
                                animationDuration={1000}
                                type="monotone"
                                dataKey="low"
                                stroke="#82ca9d"
                                dot={{ strokeWidth: 0.5 }}
                                label={<GraphCustomLabelComponent />} />
                        </LineChart>
                    </ResponsiveContainer>
                </Col>
            </Grid>
        );
    }
}
