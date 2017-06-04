import * as React from 'react';
import { LoadingComponent } from '../common/loading.component';
import NavbarContainer from '../common/nav-bar.container';
import { CurrentTemperatureComponent } from '../dashboard/widgets/current-temperature.component';
import { CurrentWeatherDescriptionComponent } from '../dashboard/widgets/current-weather-description.component';
import { PlaceNameComponent } from '../dashboard/widgets/place-name.component';
import SearchOverlayContainer from '../search/overlay/search-overlay.container';
import { CurrentLocationErrorComponent } from './current-location-error.component';
import { CurrentLocation } from './current-location.state';
import { FutureWeatherGraphComponent } from '../dashboard/widgets/graph/future-weather-graph.component';

interface Props {
    currentLocation: CurrentLocation;
    fetchCurrentLocationWeather();
}

const style = {
    loading: {
        paddingTop: 200
    }
};

export class CurrentLocationComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.fetchCurrentLocationWeather();
    }

    render() {
        return (
            <div>
                {
                    !this.props.currentLocation.isFetchingCurrentLocation ? (
                        this.props.currentLocation.hasCurrentLocationWeather ? (
                            <div>
                                <PlaceNameComponent address={
                                    this.props.currentLocation.currentLocationData.city.length > 0 ?
                                        this.props.currentLocation.currentLocationData.city :
                                        this.props.currentLocation.currentLocationData.country_name
                                } />
                                <CurrentTemperatureComponent weather={this.props.currentLocation.weather} />
                                <CurrentWeatherDescriptionComponent weather={this.props.currentLocation.weather} />
                                <br />
                                <FutureWeatherGraphComponent weather={this.props.currentLocation.weather} />
                            </div>
                        ) : (
                                <CurrentLocationErrorComponent />
                            )

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
