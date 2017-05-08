import * as React from 'react';
import SearchContainer from '../search/search.container';
import WeatherContainer from '../weather/weather.container';

export class DashboardComponent extends React.Component<any, any> {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <SearchContainer />
        <WeatherContainer />
      </div>
    );
  }
}
