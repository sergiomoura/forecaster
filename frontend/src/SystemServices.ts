import { type Coordinates } from './types/Coordinates'
import { type WeatherResponse } from './types/WeatherResponse'

const url = 'http://localhost:5000/api/v1/weather'

export const SystemServices = {
  getWeatherFromCity: async (city: string): Promise<WeatherResponse> => {

    const response = await fetch(`${url}?city=${city}`)
    const result = (await response.json()) as WeatherResponse
    return result

  },

  getWeatherFromCoordinates: async (coordinates: Coordinates): Promise<WeatherResponse> => {

    const response = await fetch(`${url}?lat=${coordinates.lat}&lon=${coordinates.lon}`)
    const result = (await response.json()) as WeatherResponse
    return result

  }
}
