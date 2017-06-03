import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import { darkWhite } from 'material-ui/styles/colors';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid/lib/index';
import { Weather } from '../../common/weather.interface';
import { farenToCel } from '../../common/weather.service';
import { WeatherIconComponent } from './weather-icon.component';

interface Props {
    weather: Weather;
}

const style = {
    table: {
        background: 'none',
        color: darkWhite
    },
    tableRow: {
        color: darkWhite,
        fontWeight: 'bold'
    }
};

export class FutureWeatherListComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Grid fluid style={{ padding: 0 }}>
                <Col xs={12} sm={12} md={12}>
                    <Table style={style.table}>
                        <TableBody displayRowCheckbox={false}>
                            {
                                this.props.weather.query.results.channel.item.forecast.slice(0, 5).map((forecast, key) => {
                                    return <TableRow key={key} style={style.tableRow} selectable={false}>
                                        <TableRowColumn>
                                            <Avatar icon={<WeatherIconComponent weather={forecast.code} />} />
                                        </TableRowColumn>
                                        <TableRowColumn>
                                            {forecast.day}
                                        </TableRowColumn>
                                        <TableRowColumn style={{ textAlign: 'center' }}>
                                            {farenToCel(parseInt(forecast.high))}&deg;
                                        </TableRowColumn>
                                    </TableRow>;
                                })
                            }
                        </TableBody>
                    </Table>
                </Col>

            </Grid>
        );
    }
}
