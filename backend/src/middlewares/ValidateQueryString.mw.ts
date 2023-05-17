import { FailedResponses } from '@/errors/FailedResponses';
import { type Middleware } from '@/types/Middleware';
import { type Request } from '@/types/Request';
import { type Response } from '@/types/Response';

export class ValidateQueryString implements Middleware {

  async handle (request: Request): Promise<Request | Response> {
    
    if (request.query === undefined) {

      return FailedResponses.badRequest;
    
    }
    
    const hasCity = 'city' in request.query;
    const hasLatLon = 'lat' in request.query && 'lon' in request.query;

    if ((hasCity && hasLatLon) || (!hasCity && !hasLatLon)) {

      return FailedResponses.badRequest;
    
    }

    const isNumeric = /^(-)?\d+(\.\d+)?$/;
    const latNotNumeric = !isNumeric.test(<string>request.query.lat);
    const lonNotNumeric = !isNumeric.test(<string>request.query.lon);
    if (latNotNumeric || lonNotNumeric) {
      
      return FailedResponses.badRequest;
    
    }
  
    return request;

  }

}
