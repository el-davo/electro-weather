import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as currentLocationActions from './current-location.actions';
import { CurrentLocationComponent } from './current-location.component';
import { CurrentLocation } from './current-location.state';

interface Props {
    currentLocation: CurrentLocation;
    actions: Actions;
}

interface Actions {
    fetchCurrentLocationWeather();
}

const CurrentLocationContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <CurrentLocationComponent
            currentLocation={props.currentLocation}
            fetchCurrentLocationWeather={props.actions.fetchCurrentLocationWeather} />
    );
};

function mapStateToProps(state) {
    return {
        currentLocation: state.currentLocation
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...currentLocationActions }, dispatch)
    };
}

export default connect<{}, {}, any>(
    mapStateToProps,
    mapDispatchToProps
)(CurrentLocationContainer);
