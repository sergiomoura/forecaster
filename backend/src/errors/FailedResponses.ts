import { type Response } from '@/types/Response';
export const FailedResponses = {
  
  failedToGeocode: <Response> {
    status: 500,
    body: 'Falha ao geolocalizar a cidade. Tente novamente mais tarde.'
  },

  failedToGetWeather: <Response> {
    status: 500,
    body: 'Falha ao carregar previsão do tempo. Tente novamente mais tarde.'
  },

  noCityFound: <Response> {
    status: 404,
    body: 'Nenhuma cidade encontrada.'
  },

  badRequest: <Response> {
    status: 400,
    body: 'Sua querystring deve ter um dos formatos:' +
           'city={nomeDaCidade} ou lat={x}&lon={y}' +
           'com x e y numéricos'
  }

};
