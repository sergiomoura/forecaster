export const Errors = {
  failedToReachGeocodeService: new Error('Serviço de geocoding inacessível'),
  failedToQueryGeocodeService: new Error('Falha ao consultar serviço de geocoding'),
  invalidDataFromGeocodeService: new Error('Serviço de geocoding retornou dados inválidos'),
  failedToReachWeatherService: new Error('Serviço de previsão do tempo inacessível'),
  invalidDataFromWeatherService: new Error('Serviço de previsão do tempo retornou dados inválidos')
};
