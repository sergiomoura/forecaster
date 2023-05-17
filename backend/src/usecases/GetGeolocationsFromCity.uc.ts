import { type GeocodeRepository } from '@/types/GeocodeRepository';
import { type Geolocation } from '@/types/Geolocation';

export class GetLocationsFromCity {

  constructor (private readonly repo: GeocodeRepository) {}
  async execute (city: string, country?: string): Promise<Geolocation[]> {

    return await this.repo.getLocationsFromCity(city, country);
  
  }

}
