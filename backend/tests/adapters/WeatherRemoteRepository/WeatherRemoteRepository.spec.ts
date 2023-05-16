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

        const meteorologic = await repo.getMeteologicFromCoordinates(coordinates);
      
        expect(meteorologic.isDay).toBeTypeOf('boolean');
        expect(meteorologic.temperature.value).toBeTypeOf('number');
        expect(meteorologic.windSpeed.value).toBeTypeOf('number');
        expect(Object.values(WeatherDictionary)).toContain(meteorologic.weather.msg);
        expect(Object.keys(WeatherDictionary)).toContain(String(meteorologic.weather.code));
      
      }
    );
  
  }
);
