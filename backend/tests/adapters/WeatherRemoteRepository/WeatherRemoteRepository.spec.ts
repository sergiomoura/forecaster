import { WeatherRemoteRepository } from '@/adapters/WeatherRemoteRepository/WeatherRemoteRepository';
import { type Coordinates } from '@/types/Coordinates';
import { describe, test, expect, beforeEach } from 'vitest';
import { WeatherDictionary } from '@/types/WeatherDictionary';

describe(
  'WeatherRemoteRepository spec',
  () => {

    const coordinates: Coordinates = {
      lat: -50,
      lon: -86
    };
    
    let repo: WeatherRemoteRepository;

    beforeEach(() => {

      repo = new WeatherRemoteRepository();
    
    });

    test(
      'Should get a valid weather response',
      async () => {

        const weather = await repo.getWeatherFromCoordinates(coordinates);
      
        expect(weather.isDay).toBeTypeOf('boolean');
        expect(weather.temperature.value).toBeTypeOf('number');
        expect(weather.windSpeed.value).toBeTypeOf('number');
        expect(Object.values(WeatherDictionary)).toContain(weather.weatherStatus.msg);
        expect(Object.keys(WeatherDictionary)).toContain(String(weather.weatherStatus.code));
      
      }
    );
  
  }
);
