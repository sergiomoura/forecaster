import { RemoteRepository } from '@/adapters/RemoteRepository/RemoteRepository';
import { type Geolocation } from '@/types/Geolocation';
import { describe, test, expect, beforeEach } from 'vitest';

describe(
  'RemoteRepository spec',
  () => {

    const unexistentCity = 'wwwwwww';
    const existingCity = 'anapolis';
    const expectedLocations: Geolocation[] = [
      {
        id: 286325132,
        city: 'Anápolis',
        state: 'Goiás',
        substate: 'Região Centro-Oeste',
        country: 'Brasil',
        coordinates: { lat: -16.3332828, lon: -48.9525756 }
      },
      {
        id: 287117670,
        city: 'Anápolis',
        state: 'São Paulo',
        substate: 'Região Sudeste',
        country: 'Brasil',
        coordinates: { lat: -21.7249995, lon: -50.5345074 }
      },
      {
        id: 80073535,
        city: 'Anápolis',
        state: 'Rio de Janeiro',
        substate: 'Região Sudeste',
        country: 'Brasil',
        coordinates: { lat: -22.3035112, lon: -43.2002849 }
      },
      {
        id: 7163602,
        city: 'Anapolis',
        state: 'Panevezys County',
        substate: '42261',
        country: 'Lituânia',
        coordinates: { lat: 55.8081348, lon: 25.7750426 }
      },
      {
        id: 288682852,
        city: 'Anápolis',
        state: 'Minas Gerais',
        substate: 'Região Sudeste',
        country: 'Brasil',
        coordinates: { lat: -19.7828978, lon: -42.1460867 }
      },
      {
        id: 17565921,
        city: 'Anapolis',
        state: 'Siauliai County',
        substate: '84267',
        country: 'Lituânia',
        coordinates: { lat: 56.1940984, lon: 23.5871276 }
      },
      {
        id: 46545913,
        city: 'Anapolis',
        state: 'Panevezys County',
        substate: '38300',
        country: 'Lituânia',
        coordinates: { lat: 55.6117753, lon: 24.0740705 }
      },
      {
        id: 190737202,
        city: 'Anapolis',
        state: 'Região Centro-Oeste',
        substate: '75533290',
        country: 'Brasil',
        coordinates: { lat: -18.4165936, lon: -49.2317559 }
      },
      {
        id: 250326063,
        city: 'Anapolis',
        state: 'Região Centro-Oeste',
        substate: '75533290',
        country: 'Brasil',
        coordinates: { lat: -18.4200735, lon: -49.2326632 }
      },
      {
        id: 137916835,
        city: 'Anapolis',
        state: 'Cagayan Valley',
        substate: '3500',
        country: 'Filipinas',
        coordinates: { lat: 17.6612687, lon: 121.7534729 }
      }
    ];

    let repo: RemoteRepository;

    beforeEach(() => {

      repo = new RemoteRepository();
    
    });

    test(
      'Should get empty array',
      async () => {

        const locations = await repo.getLocationsFromCity(unexistentCity);
        expect(locations.length).toBe(0);
      
      }
    );

    test(
      'Should get an array of valid Geolocations',
      async () => {

        const locations = await repo.getLocationsFromCity(existingCity);
        expect(locations).toEqual(expectedLocations);
      
      }
    );
  
  }
);
