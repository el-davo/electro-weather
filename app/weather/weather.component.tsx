import * as React from 'react';
import { LoadingComponent } from '../common/loading.component';
import { CurrentWeather } from './weather.state';
import { CurrentWeatherComponent } from './widgets/current-weather.component';
import { FutureWeatherListComponent } from './widgets/future-weather-list.component';

interface Props {
  currentWeather: CurrentWeather;
}

export class WeatherComponent extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        {
          !this.props.currentWeather.isFetchingWeather ? (
            <div>
              {
                this.props.currentWeather.weather.query.count > 0 ? (
                  <div>
                    <CurrentWeatherComponent currentWeather={this.props.currentWeather} />
                    <FutureWeatherListComponent currentWeather={this.props.currentWeather} />
                  </div>
                ) : (
                    <div>No results</div>
                  )
              }
            </div>
          ) : (
              <LoadingComponent />
            )
        }
      </div>
    );
  }
}
