import { Place } from '../search/search.state';
import {json} from 'web-request';

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

export function farenToCel(farenheight: number) {
    return Math.round((farenheight - 32) * (5 / 9));
}