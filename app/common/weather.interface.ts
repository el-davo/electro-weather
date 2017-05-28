export interface Weather {
  query: Query;
}

interface Query {
  count: number;
  created: string;
  lang: string;
  results: Results;
}

interface Results {
  channel: Channel;
}

interface Channel {
  astronomy: Astronomy;
  atmosphere: Atmosphere;
  description: string;
  image: Image;
  item: Item;
  language: string;
  lastBuildDate: string;
  link: string;
  location: Location;
  title: string;
  ttl: string;
  units: Units;
  wind: Wind;
}

interface Astronomy {
  sunrise: string;
  sunset: string;
}

interface Atmosphere {
  humidity: string;
  pressure: string;
  rising: string;
  visibility: string;
}

interface Image {
  height: string;
  link: string;
  title: string;
  url: string;
  width: string;
}

interface Item {
  condition: Condition;
  description: string;
  forecast: Forecast[];
  guid: Guid;
  lat: string;
  link: string;
  long: string;
  pubDate: string;
  title: string;
}

interface Condition {
  code: string;
  date: string;
  temp: string;
  text: string;
}

interface Forecast {
  code: string;
  date: string;
  day: string;
  high: string;
  low: string;
  text: string;
}

interface Guid {
  isPermaLink: string;
}

interface Location {
  city: string;
  country: string;
  region: string;
}

interface Units {
  distance: string;
  pressure: string;
  speed: string;
  temperature: string;
}

interface Wind {
  chill: string;
  direction: string;
  speed: string;
}