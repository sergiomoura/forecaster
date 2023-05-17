import { Errors } from '@/errors/Errors';
import { type Coordinates } from '@/types/Coordinates';
import { type Weather } from '@/types/Weather';
import { type WeatherRepository } from '@/types/WeatherRepository';
import WeatherResponseSchema from './WeatherResponse.schema.json';
import jsonValidator from '@/utils/JsonValidator';
import { type WeatherResponse } from './WeatherResponse';
import { mapResponseToWeather } from './WeatherResponseToMetorologic';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

const WEATHER_QUERY_URL = (lat: number, lon: number): string => {

  return `${BASE_URL}?latitude=${lat}&longitude=${lon}&current_weather=true`;

};

export class WeatherRemoteRepository implements WeatherRepository {

  async getWeatherFromCoordinates (coordinates: Coordinates): Promise<Weather> {

    const response = await fetch(WEATHER_QUERY_URL(coordinates.lat, coordinates.lon));
    if (response.status !== 200) throw Errors.failedToReachWeatherService;

    const data = await response.json();
    const validationResult = jsonValidator.validate(WeatherResponseSchema, data);
    if (!validationResult.isValid) throw Errors.invalidDataFromWeatherService;
    return mapResponseToWeather(<WeatherResponse>data);
  
  }

}
