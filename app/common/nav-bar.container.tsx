import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from '../search/search.actions';
import {NavBarComponent} from './nav-bar.component';

interface Props {
    actions: Actions;
}

interface Actions {
    showSearchOverlay();
}

const NavbarContainer: React.StatelessComponent<Props> = (props: Props) => {
    return (
        <NavBarComponent showSearchOverlay={props.actions.showSearchOverlay}/>
    );
};

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...searchActions}, dispatch)
    };
}

export default connect<{}, {}, any>(
    mapStateToProps,
    mapDispatchToProps
)(NavbarContainer);
