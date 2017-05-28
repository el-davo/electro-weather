import { Weather } from '../../common/weather.interface';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { Place } from '../../search/search.state';
import { FETCH_WEATHER } from '../dashboard.action-types';
import { fetchWeatherFailed, updateWeather } from '../dashboard.actions';
import { fetchWeather } from './weather.service';

function* fetch({place}: { place: Place }) {
  try {
    const weather: Weather = yield call(fetchWeather, place);

    yield put(updateWeather(place, weather));
  } catch (err) {
    yield put(fetchWeatherFailed(place));
  }
}

export function* fetchWeatherSaga() {
  yield* takeEvery(FETCH_WEATHER, fetch);
}