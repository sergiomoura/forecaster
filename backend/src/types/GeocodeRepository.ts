import { type Geolocation } from './Geolocation';

export interface GeocodeRepository {

  getLocationsFromCity: (city: string, country?: string) => Promise<Geolocation[]>

}
