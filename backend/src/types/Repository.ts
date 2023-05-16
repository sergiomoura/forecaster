import { type Geolocation } from './Geolocation';

export interface Repository {

  getLocationsFromCity: (city: string, country?: string) => Promise<Geolocation[]>

}
