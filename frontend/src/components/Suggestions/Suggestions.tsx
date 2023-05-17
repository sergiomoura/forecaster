import { type Geolocation } from '../../types/Geolocation'
import './Suggestions.scss'

type SuggestionsProps = {
  locations: Geolocation[]
}
export function Suggestions (props: SuggestionsProps): JSX.Element {

  function onLocationClick (location: Geolocation): void {

    console.log(location)

  }

  return (
    <div id="suggestions">
      <span> Você quis dizer...</span>
      <ul>
        {
          props.locations.map(
            location => <li key={location.id}><a onClick={evt => { evt.preventDefault(); onLocationClick(location) }}>{location.city}, {location.state} - {location.country}</a></li>
          )
        }
      </ul>
    </div>
  )

}
