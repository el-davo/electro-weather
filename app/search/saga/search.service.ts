import {json} from 'web-request';

export function searchPlaces(query: string) {
  return json(`https://maps.googleapis.com/maps/api/place/textsearch/json`, {
    qs: {
      query,
      key: 'AIzaSyBWddKEYVqEafz8g-CXXOxSrfTPLT406cE'
    },
    throwResponseError: true,
    strictSSL: false
  });

}
