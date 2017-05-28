import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { dashboardReducer as dashboard } from './dashboard/dashboard.reducer';
import { searchReducer as search } from './search/search.reducer';
import { currentWeatherReducer as currentWeather } from './weather/weather.reducer';

export const rootReducer = combineReducers({
  routing,
  search,
  currentWeather,
  dashboard
});
