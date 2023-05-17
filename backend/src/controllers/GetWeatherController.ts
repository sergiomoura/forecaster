import { FailedResponses } from '@/errors/FailedResponses';
import { type Controller } from '@/types/Controller';
import { type Request } from '@/types/Request';
import { type Response } from '@/types/Response';
import { type Geolocation } from '@/types/Geolocation';
import { type GetLocationsFromCity } from '@/usecases/GetGeolocationsFromCity.uc';
import { type GetMeteorologicConditionFromCoordinates } from '@/usecases/GetMeteorologicConditionFromCoordinates.uc';
import { type MeteoroligicalCondition } from '@/types/MeteoroligicalCondition';

export class GetWeatherController implements Controller {

  constructor (
    private readonly getMeteorologicConditionFromCoordinates: GetMeteorologicConditionFromCoordinates,
    private readonly getLocationsFromCity: GetLocationsFromCity
  ) {}

  async handle (request: Request): Promise<Response> {

    const city = (request.query?.city === undefined ? 'anapolis' : request.query.city);
    const country = request.query?.country;

    let locations: Geolocation[];
    try {

      locations = await this.getLocationsFromCity.execute(city, country);
    
    } catch (error) { return FailedResponses.failedToGeocode; }

    if (locations.length === 0) { return FailedResponses.noCityFound; }

    let weather: MeteoroligicalCondition;
    try {
      
      weather = await this.getMeteorologicConditionFromCoordinates.execute(locations[0].coordinates);
    
    } catch (error) { return FailedResponses.failedToGetWeather; }
    
    const [location, ...suggestedLocations] = locations;
    const response: Response = {
      status: 200,
      body: {
        weather, location, suggestedLocations
      }
    };

    return response;
  
  }

}