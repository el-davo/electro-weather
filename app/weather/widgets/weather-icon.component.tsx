import * as React from 'react';
import WeatherIcons from 'react-weathericons';
import { CurrentWeather } from '../weather.state';

interface Props {
    currentWeather: CurrentWeather;
}

export class WeatherIconComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <WeatherIcons name="cloud" size="2x" />
            </div>
        );
    }
}
