import * as React from 'react';
import { LoadingComponent } from '../../common/loading.component';
import { Place } from '../../search/search.state';
import { CurrentWeatherComponent } from '../widgets/current-weather.component';
import { FutureWeatherListComponent } from '../widgets/future-weather-list.component';

interface Props {
    place: Place;
    fetchWeather(place: Place);
}

export class WeatherComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.fetchWeather(this.props.place);
    }

    render() {
        return (
            <div>
                {
                    !this.props.place.isLoadingWeather && this.props.place.weather ? (
                        <div>
                            <CurrentWeatherComponent weather={this.props.place.weather} />
                            <FutureWeatherListComponent weather={this.props.place.weather} />
                        </div>
                    ) : (
                            <div>Loading...</div>
                        )
                }
            </div>
        );
    }
}
