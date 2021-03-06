import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dashboardActions from './dashboard.actions';
import { DashboardComponent } from './dashboard.component';
import { Dashboard } from './dashboard.state';

interface Props {
    dashboard: Dashboard;
}

const DashboardContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <DashboardComponent
            dashboard={props.dashboard} />
    );
};

function mapStateToProps(state) {
    return {
        dashboard: state.dashboard
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...dashboardActions }, dispatch)
    };
}

export default connect<{}, {}, any>(
    mapStateToProps,
    mapDispatchToProps
)(DashboardContainer);
