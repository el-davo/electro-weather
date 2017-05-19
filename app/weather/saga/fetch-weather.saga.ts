import {takeLatest} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {FETCH_WEATHER} from '../weather.action-types';
import {fetchCurrentWeatherFailed, updateWeather} from '../weather.actions';
import { Weather } from '../weather.state';
import {fetchWeather} from './weather.service' ;
import {Place} from "../../search/search.state";

function* fetch({place}: {place: Place}) {
  try {
    const weather: Weather = yield call(fetchWeather, place);

    yield put(updateWeather(weather));
  } catch (err) {
    yield put(fetchCurrentWeatherFailed());
  }
}

export function* fetchWeatherSaga() {
  yield* takeLatest(FETCH_WEATHER, fetch);
}
