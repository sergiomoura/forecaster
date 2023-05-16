import { type Coordinates } from './Coordinates';
import { type MeteoroligicalCondition } from './MeteoroligicalCondition';

export interface WeatherRepository {
  getMeteologicFromCoordinates: (coordinates: Coordinates) => Promise<MeteoroligicalCondition>
}
