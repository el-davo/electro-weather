import {takeLatest} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {FETCH_WEATHER} from '../weather.action-types';
import {fetchCurrentWeatherFailed, updateWeather} from '../weather.actions';
import {fetchWeather} from './weather.service' ;

function* fetch({place}) {
  try {
    const weather = yield call(fetchWeather, place);

    yield put(updateWeather(weather));
  } catch (err) {
    yield put(fetchCurrentWeatherFailed());
  }
}

export function* fetchWeatherSaga() {
  yield* takeLatest(FETCH_WEATHER, fetch);
}
