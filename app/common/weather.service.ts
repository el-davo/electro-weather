import { json } from 'web-request';
import { Place } from '../search/search.state';

export function fetchWeather(place: Place) {
  return json(`https://query.yahooapis.com/v1/public/yql`, {
    qs: {
      format: 'json',
      q: `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${place.formatted_address}")`
    },
    throwResponseError: true,
    strictSSL: false
  });
}

export function fetchWeatherByLatLng(lat: number, lng: number) {
  return json(`https://query.yahooapis.com/v1/public/yql`, {
    qs: {
      format: 'json',
      q: `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="(${lat},${lng})")`
    },
    throwResponseError: true,
    strictSSL: false
  });
}

export function farenToCel(farenheight: number) {
  return Math.round((farenheight - 32) * (5 / 9));
}
