import './Home.scss'

import { useState, useContext, useEffect } from 'react'
import { Form } from '../../components/Form/Form'
import { Suggestions } from '../../components/Suggestions/Suggestions'
import { WeatherCard } from '../../components/WeatherCard/WeatherCard'
import { Context } from '../../Context'
import { EventTypes, type EventHandler, type OnFormSubmittedEvent } from '../../SystemEventHub'
import { type WeatherResponse } from '../../types/WeatherResponse'

// const result = { weather: { isDay: false, temperature: { value: 22.6, unit: '°C' }, weatherStatus: { code: 1, msg: 'Céu limpo' }, windSpeed: { value: 0.7, unit: 'km/h' } }, location: { id: 287037228, city: 'El Salvador', country: 'El Salvador', coordinates: { lat: 13.8000382, lon: -88.9140683 } }, suggestedLocations: [{ id: 287139656, city: 'Salvador', state: 'Bahia', substate: 'Região Nordeste', country: 'Brasil', coordinates: { lat: -12.9822499, lon: -38.4812772 } }, { id: 287504085, city: 'El Salvador', state: 'El Salvador', substate: 'Zacatecas', country: 'México', coordinates: { lat: 24.44129225, lon: -100.87608726076067 } }, { id: 528777, city: 'El Salvador', state: 'Región de Atacama', substate: '1500000', country: 'Chile', coordinates: { lat: -26.2462114, lon: -69.6259658 } }, { id: 288515656, city: 'Salvador', state: 'Comunidad de Madrid', substate: '28001', country: 'España', coordinates: { lat: 40.4448868, lon: -3.631505 } }, { id: 527036, city: 'El Salvador', state: 'Northern Mindanao', substate: '9018', country: 'Pilipinas / Philippines', coordinates: { lat: 8.5606937, lon: 124.5227662 } }, { id: 287697979, city: 'Salvador', state: 'Penamacor', substate: 'Castelo Branco', country: 'Portugal', coordinates: { lat: 40.0887823, lon: -7.0908071 } }, { id: 521918, city: 'Salvador', state: 'Lanao del Norte', substate: 'Northern Mindanao', country: 'Pilipinas / Philippines', coordinates: { lat: 7.9031902, lon: 123.8408099 } }, { id: 4120275, city: 'Salvador', state: 'Región Metropolitana de Santiago', substate: '7500128', country: 'Chile', coordinates: { lat: -33.4327079, lon: -70.6261018 } }, { id: 143032220, city: 'Salvador', substate: 'Salvador', country: 'Falkland Islands', coordinates: { lat: -51.43795865, lon: -58.37432888480611 } }] }

export function Home (): JSX.Element {

  const [weatherResponse, setWeatherResponse] = useState<WeatherResponse>(
    {
      location: {
        city: '',
        country: '',
        coordinates: { lat: 0, lon: 0 },
        id: 0,
        state: '',
        substate: ''
      },
      suggestedLocations: [],
      weather: {
        isDay: true,
        temperature: { unit: '°C', value: 0 },
        windSpeed: { unit: 'km/h', value: 0 },
        weatherStatus: {
          code: 0,
          msg: 'Céu limpo'
        }
      }
    }
  )

  const {
    SystemEventHub,
    SystemServices
  } = useContext(Context)

  useEffect(
    () => {

      function handleFormSubmitted (evt: OnFormSubmittedEvent): void {

        SystemServices.getWeatherFromCity(evt.city)
          .then(
            wr => {

              console.log(wr)
              setWeatherResponse(wr)

            }
          )
          .catch(
            err => { console.error(err) }
          )

      }

      SystemEventHub.on(EventTypes.formSubmitted, handleFormSubmitted as EventHandler)

      return () => {

        SystemEventHub.off(EventTypes.formSubmitted, handleFormSubmitted as EventHandler)

      }

    }
  )
  return (
        <main id="home">

            <Form defaultCity="Anápolis" />

            {weatherResponse.suggestedLocations.length > 0 && <Suggestions locations={weatherResponse.suggestedLocations.slice(0, 4)} />}

            <WeatherCard weather={weatherResponse.weather} location={weatherResponse.location}/>
        </main>
  )

}
