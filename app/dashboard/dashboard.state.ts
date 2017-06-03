import { Place } from '../search/search.state';

export const dashboard = {
    isInitializingApp: true,
    places: {}
} as Dashboard;

export interface Dashboard {
    isInitializingApp: boolean;
    places: Places;
}

export interface Places {
    [key: string]: Place;
}
