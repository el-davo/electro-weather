import { Weather } from '../../common/weather.interface';
import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid/lib/index';
import { darkWhite } from 'material-ui/styles/colors';

const style = {
  celsius: {
    textAlign: 'center',
    fontSize: 100,
    color: darkWhite
  },
  condition: {
    textAlign: 'center',
    color: darkWhite
  }
};

interface Props {
  weather: Weather;
}

export class CurrentWeatherDescriptionComponent extends React.Component<Props, any> {

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
            <div style={style.condition}>
              {this.props.weather.query.results.channel.item.condition.text}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
