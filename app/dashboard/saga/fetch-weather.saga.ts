import { fetchWeatherByPlace } from '../../common/weather.service';
import { delay, takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { Weather } from '../../common/weather.interface';
import { Place } from '../../search/search.state';
import { FETCH_WEATHER } from '../dashboard.action-types';
import { fetchWeatherFailed, updateWeather } from '../dashboard.actions';

function* fetch({place}: { place: Place }) {
  try {
    const weather: Weather = yield call(fetchWeatherByPlace, place);

    yield call(delay, 500);

    yield put(updateWeather(place, weather));
  } catch (err) {
    yield put(fetchWeatherFailed(place));
  }
}

export function* fetchWeatherSaga() {
  yield* takeEvery(FETCH_WEATHER, fetch);
}
