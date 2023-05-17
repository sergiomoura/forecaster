import { useContext } from 'react'
import { type Geolocation } from '../../types/Geolocation'
import './Suggestions.scss'
import { Context } from '../../Context'
import { EventTypes, type OnLocationClickedEvent } from '../../SystemEventHub'

type SuggestionsProps = {
  locations: Geolocation[]
}

export function Suggestions (props: SuggestionsProps): JSX.Element {

  const { SystemEventHub } = useContext(Context)

  function onLocationClick (location: Geolocation): void {

    const onLocationClickEvent: OnLocationClickedEvent = {
      type: EventTypes.locationClicked,
      location
    }

    SystemEventHub.emit(onLocationClickEvent)

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
