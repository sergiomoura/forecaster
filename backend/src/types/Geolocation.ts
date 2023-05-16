import { type Coordinates } from './Coordinates';

export type Geolocation = {
  id: number
  city: string
  state: string
  substate: string
  country: string
  coordinates: Coordinates
};
