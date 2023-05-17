import { type Weather } from '@/types/Weather';
import { type WeatherResponse } from './WeatherResponse';
import { WeatherDictionary } from '@/types/WeatherDictionary';

export function mapResponseToWeather (weatherResponse: WeatherResponse): Weather {

  return {
    isDay: weatherResponse.current_weather.is_day === 1,
    temperature: {
      value: weatherResponse.current_weather.temperature,
      unit: '°C'
    },
    weatherStatus: {
      code: weatherResponse.current_weather.weathercode,
      msg: WeatherDictionary[weatherResponse.current_weather.weathercode]
    },
    windSpeed: {
      value: weatherResponse.current_weather.windspeed,
      unit: 'km/h'
    }
  };

}
