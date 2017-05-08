import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {WeatherComponent} from './weather.component';
import {CurrentWeather} from './weather.state';

interface Props {
  currentWeather: CurrentWeather;
}

const WeatherContainer: React.StatelessComponent<Props> = (props) => {
  return (
    <WeatherComponent currentWeather={props.currentWeather}/>
  );
};

function mapStateToProps(state) {
  return {
    currentWeather: state.currentWeather
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}

export default connect<{}, {}, any>(
  mapStateToProps,
  mapDispatchToProps
)(WeatherContainer);
