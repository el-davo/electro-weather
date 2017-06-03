import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { Weather } from '../../common/weather.interface';
import { fetchWeatherByPlace } from '../../common/weather.service';
import { updateWeather } from '../../dashboard/dashboard.actions';
import { getSavedPlaces, savePlaces } from '../../places/places.service';
import { SELECT_PLACE } from '../search.action-types';
import { hideSearchOverlay, placeHasNoWeather, selectPlaceFailed } from '../search.actions';
import { Place } from '../search.state';

function* select({ place }: { place: Place }) {
    try {
        const weather: Weather = yield call(fetchWeatherByPlace, place);

        if (weather.query && weather.query.count === 0) {
            return yield put(placeHasNoWeather());
        }

        const places: Place[] = yield call(getSavedPlaces);

        yield call(savePlaces, { ...places, [place.id]: place });

        yield put(hideSearchOverlay());

        yield put(updateWeather(place, weather));

    } catch (err) {
        yield put(selectPlaceFailed());
    }
}

export function* selectPlaceSaga() {
    yield* takeLatest(SELECT_PLACE, select);
}
