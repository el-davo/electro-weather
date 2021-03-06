import { Weather } from '../common/weather.interface';
export const search = {
    isFetchingSearch: false,
    showSearchOverlay: false,
    hasSearched: false,
    isCheckingPlaceHasWeather: false,
    places: []
} as Search;

export interface Search {
    isFetchingSearch: boolean;
    showSearchOverlay: boolean;
    hasSearched: boolean;
    isCheckingPlaceHasWeather: boolean;
    places: Place[];
}

export interface Place {
    formatted_address: string;
    geometry: Geometry;
    icon: string;
    id: string;
    place_id: string;
    reference: string;
    isLoadingWeather: boolean;
    isLoadingFailed: boolean;
    weather: Weather;
}

interface Geometry {
    location: Location;
    viewport: Viewport;
}

interface Viewport {
    northeast: Northeast;
    southwest: Southwest;
}

interface Northeast {
    lat: number;
    lng: number;
}

interface Southwest {
    lat: number;
    lng: number;
}

interface Location {
    lat: number;
    lng: number;
}
