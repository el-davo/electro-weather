import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as dashboardActions from '../dashboard/dashboard.actions';
import * as searchActions from './search.actions';
import {SearchComponent} from './search.component';
import {Search} from './search.state';
import {Place} from './search.state';

interface Props {
  search: Search;
  actions: Actions;
}

interface Actions {
  fetchSearchPlaces(term: string);
  fetchCurrentWeather(place: Place);
}

const SearchContainer: React.StatelessComponent<Props> = (props) => {
  return (
    <SearchComponent search={props.search}
                     fetchSearchPlaces={props.actions.fetchSearchPlaces}
                     fetchCurrentWeather={props.actions.fetchCurrentWeather}/>
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
)(SearchContainer);
