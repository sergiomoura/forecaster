import { type Coordinates } from './Coordinates';
import { type Geolocation } from './Geolocation';

export interface GeocodeRepository {

  getLocationsFromCity: (city: string, country?: string) => Promise<Geolocation[]>
  getLocationFromCoordinates: (coordinates: Coordinates) => Promise<Geolocation>

}
