import { Errors } from '@/errors/Errors';
import { type Geolocation } from '@/types/Geolocation';
import { type Repository } from '@/types/Repository';
import jsonValidator from '@/utils/JsonValidator';
import GeocodeResponseSchema from './GeocodeResponse.schema.json';
import { type GeocodeResponse } from './GeocodeResponse';
import { GeocodeResponseToGeoocation } from './GeocodeResponseToGeolocation';

const QUERY_URL = 'https://geocode.maps.co/search?';

export class RemoteRepository implements Repository {

  async getLocationsFromCity (city: string, country?: string | undefined): Promise<Geolocation[]> {

    const url = country === undefined
      ? `${QUERY_URL}q=${city}`
      : `${QUERY_URL}city=${city}&country=${country}`;

    let response: Response;
    try {

      response = await fetch(url);
    
    } catch (_error) {

      throw Errors.failedToReachGeocodeService;
        
    }
    
    if (response.status !== 200) throw Errors.failedToQueryGeocodeService;

    const data = await response.json();
    
    const validationResult = jsonValidator.validate(GeocodeResponseSchema, data);
    if (!validationResult.isValid) {

      throw Errors.invalidDataFromGeocodeService;
    
    }
    
    return (<GeocodeResponse>data).map(gcr => GeocodeResponseToGeoocation(gcr));
  
  }

}
