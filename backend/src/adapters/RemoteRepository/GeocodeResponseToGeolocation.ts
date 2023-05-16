import { type Geolocation } from '@/types/Geolocation';

export function GeocodeResponseToGeoocation (geocodeResponse: any): Geolocation {

  const locationData = geocodeResponse.display_name.split(', ');
  return {
    id: geocodeResponse.place_id,
    city: locationData[0],
    state: locationData[locationData.length - 3],
    substate: locationData[locationData.length - 2],
    country: locationData[locationData.length - 1],
    coordinates: {
      lat: geocodeResponse.lat,
      lon: geocodeResponse.lon
    }

  };

}
