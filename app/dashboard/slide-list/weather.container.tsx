import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Place } from '../../search/search.state';
import * as dashboardActions from '../dashboard.actions';
import { WeatherComponent } from './weather.component';

interface Props {
    place: Place;
    actions: Actions;
}

interface Actions {
    fetchWeather(place: Place);
}

const WeatherContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <WeatherComponent place={props.place} fetchWeather={props.actions.fetchWeather} />
    );
};

function mapStateToProps(state, myProps) {
    return {
        place: myProps.place
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...dashboardActions}, dispatch)
    };
}

export default connect<{}, {}, any>(
    mapStateToProps,
    mapDispatchToProps
)(WeatherContainer);
