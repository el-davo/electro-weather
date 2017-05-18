import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Search} from "../search.state";
import {SearchOverlayComponent} from "./search-overlay.component";
import * as searchActions from "../search.actions";

interface Props {
    search: Search;
    actions: Actions;
}

interface Actions {
    hideSearchOverlay();
}

const SearchOverlayContainer: React.StatelessComponent<Props> = (props: Props) => {
    return (
        <SearchOverlayComponent
            search={props.search}
            hideSearchOverlay={props.actions.hideSearchOverlay}/>
    );
};

function mapStateToProps(state) {
    return {
        search: state.search
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...searchActions}, dispatch)
    };
}

export default connect<{}, {}, any>(
    mapStateToProps,
    mapDispatchToProps
)(SearchOverlayContainer);
