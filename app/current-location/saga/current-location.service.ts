import { json } from 'web-request';

export function getCurrentLocation() {
    return json(`http://freegeoip.net/json/`, {
        throwResponseError: true,
        strictSSL: false
    });
}