import { GeocodeRemoteRepository } from './adapters/GeocodeRemoteRepository/GeocodeRemoteRepository';
import { WeatherRemoteRepository } from './adapters/WeatherRemoteRepository/WeatherRemoteRepository';
import { GetWeatherController } from './controllers/GetWeatherController';
import { HttpMethod } from './types/HttpMethod';
import { type Route } from './types/Route';
import { GetLocationsFromCity } from './usecases/GetGeolocationsFromCity.uc';
import { GetMeteorologicConditionFromCoordinates } from './usecases/GetMeteorologicConditionFromCoordinates.uc';
import { WebApp } from './utils/WebApp';

const getWeatherController = new GetWeatherController(
  new GetMeteorologicConditionFromCoordinates(new WeatherRemoteRepository()),
  new GetLocationsFromCity(new GeocodeRemoteRepository())
);

const routes: Route[] = [
  {
    method: HttpMethod.GET,
    path: '/api/v1/weather',
    controller: getWeatherController,
    middlewares: []
  }
];

WebApp.setRoutes(routes);
WebApp.listen(5000);