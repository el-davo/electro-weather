import { Place } from '../search/search.state';

export const dashboard = {
    isInitializingApp: true,
    places: {},
    slideNext: null,
    slidePrev: null
} as Dashboard;

export interface Dashboard {
    isInitializingApp: boolean;
    places: Places;
    slideNext: Function;
    slidePrev: Function;
}

export interface Places {
    [key: string]: Place;
}
