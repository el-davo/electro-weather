import * as React from 'react';
import { LoadingComponent } from '../../common/loading.component';
import { Place } from '../../search/search.state';
import { CurrentTemperatureComponent } from '../widgets/current-temperature.component';
import { CurrentWeatherDescriptionComponent } from '../widgets/current-weather-description.component';
import { PlaceNameComponent } from '../widgets/place-name.component';
import { FutureWeatherGraphComponent } from '../widgets/graph/future-weather-graph.component';

interface Props {
    place: Place;
    fetchWeather(place: Place);
    slideNext();
    slidePrev();
}

const style = {
    loading: {
        paddingTop: 200
    }
};

export class WeatherComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this.slideNext = this.slideNext.bind(this);
        this.slidePrev = this.slidePrev.bind(this);
    }

    componentDidMount() {
        this.props.fetchWeather(this.props.place);
    }

    slideNext() {
        this.props.slideNext();
    }

    slidePrev() {
        this.props.slidePrev();
    }

    render() {
        return (
            <div>
                {
                    !this.props.place.isLoadingWeather && this.props.place.weather ? (
                        <div>
                            <PlaceNameComponent address={this.props.place.formatted_address} />
                            <CurrentTemperatureComponent weather={this.props.place.weather} />
                            <CurrentWeatherDescriptionComponent weather={this.props.place.weather} />
                            <br />
                            <FutureWeatherGraphComponent weather={this.props.place.weather} />
                        </div>
                    ) : (
                            <div style={style.loading}>
                                <LoadingComponent />
                            </div>
                        )
                }
            </div>
        );
    }
}
