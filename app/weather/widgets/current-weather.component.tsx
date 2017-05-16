import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid/lib/index';
import { CurrentWeather } from '../weather.state';

const style = {
  celsius: {
    textAlign: 'center',
    fontSize: 100,
    color: 'white'
  },
  condition: {
    textAlign: 'center',
    color: 'white'
  }
};

interface Props {
  currentWeather: CurrentWeather;
}

export class CurrentWeatherComponent extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);
  }

  _farenToCel(farenheight: number) {
    return Math.round((farenheight - 32) * (5 / 9));
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <div style={style.celsius}>
              {this._farenToCel(parseFloat(this.props.currentWeather.weather.query.results.channel.item.condition.temp))}&deg;
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <div style={style.condition}>
              {this.props.currentWeather.weather.query.results.channel.item.condition.text}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
