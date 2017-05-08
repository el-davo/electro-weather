export const search = {
  isFetchingSearch: false,
  places: []
} as Search;

export interface Search {
  isFetchingSearch: boolean;
  places: Place[];
}

export interface Place {
  formatted_address: string;
  geometry: Geometry;
  icon: string;
  id: string;
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
