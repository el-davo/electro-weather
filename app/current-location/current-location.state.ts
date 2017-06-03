import { Weather } from '../common/weather.interface';

export const currentLocation = {
    isFetchingCurrentLocation: true,
    currentLocationData: {},
    weather: {}
} as CurrentLocation;

export interface CurrentLocation {
    isFetchingCurrentLocation: boolean;
    currentLocationData: CurrentLocationData;
    weather: Weather;
}

export interface CurrentLocationData {
    city: string;
    country_code: string;
    country_name: string;
    ip: string;
    latitude: number;
    longitude: number;
    metro_code: number;
    region_code: string;
    region_name: string;
    time_zone: string;
    zip_code: string;
}
