import { type Coordinates } from './Coordinates';
import { type Weather } from './Weather';

export interface WeatherRepository {
  getWeatherFromCoordinates: (coordinates: Coordinates) => Promise<Weather>
}
