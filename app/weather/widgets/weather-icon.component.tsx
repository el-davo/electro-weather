import * as React from 'react';
import WeatherIcons from 'react-weathericons';
import { CurrentWeather } from '../weather.state';

// https://developer.yahoo.com/weather/documentation.html#item
const weatherMap = [
    'tornado',
    'thunderstorm',
    'hurricane',
    'thunderstorm',
    'thunderstorm',
    'rain-mix',
    'rain-mix',
    'sleet',
    'raindrops',
    'raindrops',
    'rain-wind',
    'showers',
    'showers',
    'snow',
    'snow',
    'snow-wind',
    'snow',
    'hail',
    'sleet',
    'dust',
    'fog',
    'day-haze',
    'smoke',
    'light-wind',
    'windy',
    'snowflake-cold',
    'cloudy',
    'night-cloudy',
    'day-cloudy',
    'night-cloudy',
    'day-cloudy',
    'night-clear',
    'day-sunny',
    'night-clear',
    'day-cloudy',
    'hail',
    'hot',
    'thunderstorm',
    'thunderstorm',
    'thunderstorm',
    'showers',
    'snow',
    'snow',
    'snow',
    'cloudy',
    'thunderstorm',
    'snow',
    'thunderstorm'
];

interface Props {
    weather: string;
}

export class WeatherIconComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <WeatherIcons name={weatherMap[this.props.weather]} />
        );
    }
}
