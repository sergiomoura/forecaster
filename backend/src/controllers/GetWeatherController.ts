import { FailedResponses } from '@/errors/FailedResponses';
import { type Controller } from '@/types/Controller';
import { type Request } from '@/types/Request';
import { type Response } from '@/types/Response';
import { type Geolocation } from '@/types/Geolocation';
import { type GetLocationsFromCity } from '@/usecases/GetGeolocationsFromCity.uc';
import { type GetWeatherFromCoordinates } from '@/usecases/GetWeatherFromCoordinates.uc';
import { type Weather } from '@/types/Weather';
import { type GetLocationFromCoordinates } from '@/usecases/GetGeolocationsFromCoordinates.uc';

export class GetWeatherController implements Controller {

  constructor (
    private readonly getWeatherFromCoordinates: GetWeatherFromCoordinates,
    private readonly getLocationsFromCity: GetLocationsFromCity,
    private readonly getLocationFromCoordinates: GetLocationFromCoordinates
  ) {}

  async handle (request: Request): Promise<Response> {

    const city = (request.query?.city === undefined ? 'anapolis' : request.query.city);
    const country = request.query?.country;
    const lat = Number(request.query?.lat);
    const lon = Number(request.query?.lon);
    
    let locations: Geolocation[];
    try {
      
      if (!isNaN(lat) && !isNaN(lon)) {

        const location = await this.getLocationFromCoordinates.execute({ lat, lon });
        locations = [location];
      
      } else {

        locations = await this.getLocationsFromCity.execute(city, country);
      
      }
    
    } catch (error) { return FailedResponses.failedToGeocode; }

    if (locations.length === 0) { return FailedResponses.noCityFound; }

    let weather: Weather;
    try {
      
      weather = await this.getWeatherFromCoordinates.execute(locations[0].coordinates);
    
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
