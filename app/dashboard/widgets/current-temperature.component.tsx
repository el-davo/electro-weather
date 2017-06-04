import { darkWhite } from 'material-ui/styles/colors';
import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid/lib/index';
import { Weather } from '../../common/weather.interface';

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

export class CurrentTemperatureComponent extends React.Component<Props, any> {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <div style={style.celsius}>
              {this.props.weather.query.results.channel.item.condition.temp}&deg;
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
