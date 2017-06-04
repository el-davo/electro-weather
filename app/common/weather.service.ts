import { json } from 'web-request';
import { Place } from '../search/search.state';

export function fetchWeatherByPlace(place: Place) {
  return fetchWeatherByLatLng(place.geometry.location.lat, place.geometry.location.lng);
}

export function fetchWeatherByLatLng(lat: number, lng: number) {
  return json(`https://query.yahooapis.com/v1/public/yql`, {
    qs: {
      format: 'json',
      q: `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="(${lat},${lng})") and u='c'`
    },
    throwResponseError: true,
    strictSSL: false
  });
}
