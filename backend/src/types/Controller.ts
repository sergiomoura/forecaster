import { type Request } from './Request';
import { type Response } from './Response';

export interface Controller {
  handle: (request: Request) => Promise<Response>
}
