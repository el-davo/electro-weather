import { delay, takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { Weather } from '../../common/weather.interface';
import { fetchWeatherByLatLng } from '../../common/weather.service';
import { Place } from '../../search/search.state';
import { FETCH_CURRENT_LOCATION_WEATHER } from '../current-location.action-types';
import { fetchCurrentLocationWeatherFailed, updateCurrentLocationWeather } from '../current-location.actions';
import { CurrentLocationData } from '../current-location.state';
import { getCurrentLocation } from './current-location.service';

function* fetch() {
    try {
        const currentLocationData: CurrentLocationData = yield call(getCurrentLocation, 500);

        const weather: Weather = yield call(fetchWeatherByLatLng, currentLocationData.latitude, currentLocationData.longitude);

        weather.query.results.channel.item.forecast.map((forecast) => {
            forecast.high = +forecast.high;
            forecast.low = +forecast.low;
        });

        yield put(updateCurrentLocationWeather(currentLocationData, weather));
    } catch (err) {
        yield put(fetchCurrentLocationWeatherFailed());
    }
}

export function* fetchCurrentLocationWeatherSaga() {
    yield* takeEvery(FETCH_CURRENT_LOCATION_WEATHER, fetch);
}
