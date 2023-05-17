import { type Temperature } from './Temperature';
import { type WindSpeed } from './WindSpeed';
import { type WeatherStatus } from './WeatherStatus';

export type Weather = {
  weatherStatus: WeatherStatus
  windSpeed: WindSpeed
  temperature: Temperature
  isDay: boolean
};
