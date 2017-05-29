import { Place } from '../../search/search.state';
import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid/lib/index';
import { darkWhite } from 'material-ui/styles/colors';

interface Props {
    place: Place;
}

const style = {
    placeName: {
        marginTop: 17,
        textAlign: 'center',
        fontSize: 25,
        color: darkWhite
    }
}

export class PlaceNameComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Grid fluid>
                <Col xs={12} sm={12} md={12}>
                    <div style={style.placeName}>
                        {this.props.place.formatted_address}
                    </div>
                </Col>
            </Grid>
        );
    }
}
