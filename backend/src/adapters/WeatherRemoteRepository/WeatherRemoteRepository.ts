import { Errors } from '@/errors/Errors';
import { type Coordinates } from '@/types/Coordinates';
import { type MeteoroligicalCondition } from '@/types/MeteoroligicalCondition';
import { type WeatherRepository } from '@/types/WeatherRepository';
import WeatherResponseSchema from './WeatherResponse.schema.json';
import jsonValidator from '@/utils/JsonValidator';
import { type WeatherResponse } from './WeatherResponse';
import { WeatherResponseToMetorologic } from './WeatherResponseToMetorologic';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

const WEATHER_QUERY_URL = (lat: number, lon: number): string => {

  return `${BASE_URL}?latitude=${lat}&longitude=${lon}&current_weather=true`;

};

export class WeatherRemoteRepository implements WeatherRepository {

  async getMeteologicFromCoordinates (coordinates: Coordinates): Promise<MeteoroligicalCondition> {

    const response = await fetch(WEATHER_QUERY_URL(coordinates.lat, coordinates.lon));
    if (response.status !== 200) throw Errors.failedToReachWeatherService;

    const data = await response.json();
    const validationResult = jsonValidator.validate(WeatherResponseSchema, data);
    if (!validationResult.isValid) throw Errors.invalidDataFromWeatherService;
    return WeatherResponseToMetorologic(<WeatherResponse>data);
  
  }

}
