import { type Coordinates } from '@/types/Coordinates';
import { type Weather } from '@/types/Weather';
import { type WeatherRepository } from '@/types/WeatherRepository';

export class GetWeatherFromCoordinates {

  constructor (private readonly repo: WeatherRepository) {}
  async execute (coordinates: Coordinates): Promise<Weather> {

    return await this.repo.getWeatherFromCoordinates(coordinates);
  
  }

}
