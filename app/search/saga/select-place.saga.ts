import {takeLatest} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {getSavedPlaces, savePlaces} from '../../places/places.service';
import {fetchWeather} from '../../weather/saga/weather.service';
import {updateWeather} from '../../weather/weather.actions';
import {Weather} from '../../weather/weather.state';
import {SELECT_PLACE} from '../search.action-types';
import {hideSearchOverlay, placeHasNoWeather, selectPlaceFailed} from '../search.actions';
import {Place} from '../search.state';

function* select({place}: {place: Place}) {
    try {
        const weather: Weather = yield call(fetchWeather, place);

        if (weather.query && weather.query.count === 0) {
            return yield put(placeHasNoWeather());
        }

        const places: Place[] = yield call(getSavedPlaces);

        yield call(savePlaces, {...places, [place.id]: place});

        yield put(hideSearchOverlay());

        yield put(updateWeather(weather));

    } catch (err) {
        console.log(err);

        yield put(selectPlaceFailed());
    }
}

export function* selectPlaceSaga() {
    yield* takeLatest(SELECT_PLACE, select);
}
