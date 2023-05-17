import { Errors } from '@/errors/Errors';
import { type Geolocation } from '@/types/Geolocation';
import { type GeocodeRepository } from '@/types/GeocodeRepository';
import jsonValidator from '@/utils/JsonValidator';
import GeoencodeResponseSchema from './schemas/GeoencodeResponse.schema.json';
import GeodecodeResponseSchema from './schemas/GeodecodeResponse.schema.json';
import { type GeoencodeResponse, type GeodecodeResponse } from './GeocodeResponses';
import { GeocodeResponseToGeoocation } from './GeocodeResponseToGeolocation';
import { type Coordinates } from '@/types/Coordinates';

const GEOCODE_QUERY_URL = 'https://geocode.maps.co';

export class GeocodeRemoteRepository implements GeocodeRepository {

  async getLocationsFromCity (city: string, country?: string | undefined): Promise<Geolocation[]> {

    const url = country === undefined
      ? `${GEOCODE_QUERY_URL}/search?q=${city}`
      : `${GEOCODE_QUERY_URL}/search?city=${city}&country=${country}`;
    
    let response: Response;
    try {
  
      response = await fetch(url);
      
    } catch (_error) {
  
      throw Errors.failedToReachGeocodeService;
          
    }
      
    if (response.status !== 200) throw Errors.failedToQueryGeocodeService;
  
    const data = await response.json();
      
    const validationResult = jsonValidator.validate(GeoencodeResponseSchema, data);
    if (!validationResult.isValid) {
  
      throw Errors.invalidDataFromGeocodeService;
      
    }
      
    return (<GeoencodeResponse>data).map(gcr => GeocodeResponseToGeoocation(gcr));
  
  }

  async getLocationFromCoordinates (coordinates: Coordinates): Promise<Geolocation> {

    const url = `${GEOCODE_QUERY_URL}/reverse?lat=${coordinates.lat}&lon=${coordinates.lon}`;
    
    let response: Response;
    try {
  
      response = await fetch(url);
      
    } catch (_error) {
  
      throw Errors.failedToReachGeocodeService;
          
    }
      
    if (response.status !== 200) throw Errors.failedToQueryGeocodeService;
  
    const data = await response.json();
      
    const validationResult = jsonValidator.validate(GeodecodeResponseSchema, data);
    if (!validationResult.isValid) {
  
      throw Errors.invalidDataFromGeocodeService;
      
    }
      
    return GeocodeResponseToGeoocation(<GeodecodeResponse>data);
    
  }

}
