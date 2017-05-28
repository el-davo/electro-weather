import {json} from 'web-request';
import {Place} from '../../search/search.state';

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
