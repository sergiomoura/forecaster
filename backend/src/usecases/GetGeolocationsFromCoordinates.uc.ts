import { type Coordinates } from '@/types/Coordinates';
import { type GeocodeRepository } from '@/types/GeocodeRepository';
import { type Geolocation } from '@/types/Geolocation';

export class GetLocationFromCoordinates {

  constructor (private readonly repo: GeocodeRepository) {}
  async execute (coordinates: Coordinates): Promise<Geolocation> {

    return await this.repo.getLocationFromCoordinates(coordinates);
  
  }

}
