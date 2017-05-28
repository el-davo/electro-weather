import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as dashboardActions from '../../dashboard/dashboard.actions';
import * as searchActions from '../search.actions';
import {Place, Search} from '../search.state';
import {SearchOverlayComponent} from './search-overlay.component';

interface Props {
    search: Search;
    actions: Actions;
}

interface Actions {
    hideSearchOverlay();
    fetchSearchPlaces(term: string);
    selectPlace(place: Place);
}

const SearchOverlayContainer: React.StatelessComponent<Props> = (props: Props) => {
    return (
        <SearchOverlayComponent
            search={props.search}
            hideSearchOverlay={props.actions.hideSearchOverlay}
            fetchSearchPlaces={props.actions.fetchSearchPlaces}
            selectPlace={props.actions.selectPlace}/>
    );
};

function mapStateToProps(state) {
    return {
        search: state.search
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...searchActions, ...dashboardActions}, dispatch)
    };
}

export default connect<{}, {}, any>(
    mapStateToProps,
    mapDispatchToProps
)(SearchOverlayContainer);
