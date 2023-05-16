export const Errors = {
  failedToReachGeocodeService: new Error('Servico de geocoding inacessível'),
  failedToQueryGeocodeService: new Error('Falha ao consultar serviço de geocoding'),
  invalidDataFromGeocodeService: new Error('Servico de geocoding retornou dados inválidos')
};
