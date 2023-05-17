import { Environment } from './Environment';
import { GeocodeRemoteRepository } from './adapters/GeocodeRemoteRepository/GeocodeRemoteRepository';
import { WeatherRemoteRepository } from './adapters/WeatherRemoteRepository/WeatherRemoteRepository';
import { GetWeatherController } from './controllers/GetWeatherController';
import { ValidateQueryString } from './middlewares/ValidateQueryString.mw';
import { HttpMethod } from './types/HttpMethod';
import { type Route } from './types/Route';
import { GetLocationsFromCity } from './usecases/GetGeolocationsFromCity.uc';
import { GetLocationFromCoordinates } from './usecases/GetGeolocationsFromCoordinates.uc';
import { GetWeatherFromCoordinates } from './usecases/GetWeatherFromCoordinates.uc';
import { WebApp } from './utils/WebApp';

const weatherRepository = new WeatherRemoteRepository();
const geocodeRepository = new GeocodeRemoteRepository();

const getWeatherFromCoordinates = new GetWeatherFromCoordinates(weatherRepository);
const getLocationsFromCity = new GetLocationsFromCity(geocodeRepository);
const getLocationFromCoordinates = new GetLocationFromCoordinates(geocodeRepository);

const getWeatherController = new GetWeatherController(
  getWeatherFromCoordinates,
  getLocationsFromCity,
  getLocationFromCoordinates
);

const routes: Route[] = [
  {
    method: HttpMethod.GET,
    path: '/api/v1/weather',
    controller: getWeatherController,
    middlewares: [new ValidateQueryString()]
  }
];

WebApp.setRoutes(routes);
WebApp.listen(Environment.getPort());
