import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { currentLocationReducer as currentLocation } from './current-location/current-location.reducer';
import { dashboardReducer as dashboard } from './dashboard/dashboard.reducer';
import { searchReducer as search } from './search/search.reducer';

export const rootReducer = combineReducers({
  routing,
  search,
  dashboard,
  currentLocation
});
