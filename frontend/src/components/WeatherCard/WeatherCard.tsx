import './WeatherCard.scss'
import sunny from '../../assets/icons/sunny.png'

export function WeatherCard (): JSX.Element {

  return (
    <div id="weather-card">
      <h2 className="city">Salvador</h2>
      <h3 className="country">Brasil</h3>
      <div className="grid">
        <img className="weather-icon" src={sunny} alt="Mensagem do tempo" />
        <div className="weather-message">Mensagem do tempo</div>
        <div className="temperature">88<span>ºC</span></div>
        <div className="wind-speed">
          <span>Velocidade do vento</span>
          <div>2,7 km/h</div>
        </div>
      </div>
    </div>
  )

}
