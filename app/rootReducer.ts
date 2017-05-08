import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {searchReducer as search} from './search/search.reducer';
import {currentWeatherReducer as currentWeather} from './weather/weather.reducer';

export const rootReducer = combineReducers({
  routing,
  search,
  currentWeather
});
