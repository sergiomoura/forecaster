import './WeatherCard.scss'
import sunny from '../../assets/icons/sunny.png'
import cloudyDay from '../../assets/icons/cloudy-day.png'
import rainny from '../../assets/icons/rainny.png'
import storm from '../../assets/icons/storm.png'
import snowflake from '../../assets/icons/snowflake.png'

import { type Weather } from '../../types/Weather'
import { type Geolocation } from '../../types/Geolocation'

type WeatherCardProps = {
  weather: Weather
  location: Geolocation
}

function getImageFromWeatherCode (code: number): any {

  if (code < 2) { return sunny }
  if (code >= 2 && code < 50) { return cloudyDay }
  if (code >= 50 && code < 70) { return rainny }
  if (code >= 70 && code < 80) { return snowflake }
  if (code >= 80 && code < 85) { return rainny }
  if (code >= 85 && code < 95) { return snowflake }
  if (code >= 95) { return storm }

}

export function WeatherCard (props: WeatherCardProps): JSX.Element {

  const image = getImageFromWeatherCode(props.weather.weatherStatus.code)

  return (
    <div id="weather-card">
      <h2 className="city">{props.location.city}</h2>
      <h3 className="country">{props.location.country}</h3>
      <div className="grid">
        <img className="weather-icon" src={image} alt="Mensagem do tempo" />
        <div className="weather-message">{props.weather.weatherStatus.msg}</div>
        <div className="temperature">{Math.round(props.weather.temperature.value)}<span>{props.weather.temperature.unit}</span></div>
        <div className="wind-speed">
          <span>Velocidade do vento</span>
          <div>{props.weather.windSpeed.value} {props.weather.windSpeed.unit}</div>
        </div>
      </div>
    </div>
  )

}
