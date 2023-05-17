import { type Coordinates } from '@/types/Coordinates';
import { type MeteoroligicalCondition } from '@/types/MeteoroligicalCondition';
import { type WeatherRepository } from '@/types/WeatherRepository';

export class GetMeteorologicConditionFromCoordinates {

  constructor (private readonly repo: WeatherRepository) {}
  async execute (coordinates: Coordinates): Promise<MeteoroligicalCondition> {

    return await this.repo.getMeteologicFromCoordinates(coordinates);
  
  }

}
