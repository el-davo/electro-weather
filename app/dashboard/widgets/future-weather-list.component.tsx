import { Weather } from '../../common/weather.interface';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid/lib/index';
import { WeatherIconComponent } from './weather-icon.component';

interface Props {
    weather: Weather;
}

export class FutureWeatherListComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Grid fluid>
                <Col xs={12} sm={12} md={12}>
                    <List>
                        {
                            this.props.weather.query.results.channel.item.forecast.slice(0, 4).map((forecast, key) => {
                                return <ListItem
                                    key={key}
                                    primaryText={forecast.day}
                                    secondaryText={forecast.text}
                                    leftAvatar={<Avatar icon={<WeatherIconComponent weather={forecast.code} />} />} />;
                            })
                        }
                    </List>
                </Col>

            </Grid>
        );
    }
}
