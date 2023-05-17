import { type Geolocation } from './Geolocation'
import { type Weather } from './Weather'

export type WeatherResponse = {
  weather: Weather
  location: Geolocation
  suggestions: Geolocation[]
}
