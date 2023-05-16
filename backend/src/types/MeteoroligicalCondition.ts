import { type Temperature } from './Temperature';
import { type WindSpeed } from './WindSpeed';
import { type Weather } from './Weather';

export type MeteoroligicalCondition = {
  weather: Weather
  windSpeed: WindSpeed
  temperature: Temperature
  isDay: boolean
};
