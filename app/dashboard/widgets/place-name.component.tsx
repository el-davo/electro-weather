import { darkWhite } from 'material-ui/styles/colors';
import * as React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid/lib/index';
import { Place } from '../../search/search.state';

interface Props {
    address: string;
}

const style = {
    placeName: {
        marginTop: 21,
        textAlign: 'center',
        fontSize: '4vw',
        color: darkWhite
    }
};

export class PlaceNameComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Grid fluid>
                <Col xs={12} sm={12} md={12}>
                    <div style={style.placeName}>
                        {this.props.address}
                    </div>
                </Col>
            </Grid>
        );
    }
}
