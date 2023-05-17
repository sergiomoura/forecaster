import { type FormEvent, type ChangeEvent, useState, useContext } from 'react'
import { Context } from '../../Context'
import { EventTypes, type OnFormSubmittedEvent } from '../../SystemEventHub'
import { ArrowForward } from '@mui/icons-material'
import './Form.scss'

type FormProps = {
  defaultCity: string
}

export function Form (props: FormProps): JSX.Element {

  const [city, setCity] = useState<string>(props.defaultCity)
  const { SystemEventHub } = useContext(Context)

  function onFormSubmit (evt: FormEvent<HTMLFormElement>): void {

    evt.preventDefault()
    const onFormSubmitEvent: OnFormSubmittedEvent = {
      type: EventTypes.formSubmitted,
      city
    }
    SystemEventHub.emit(onFormSubmitEvent)

  }

  function onCityChange (evt: ChangeEvent<HTMLInputElement>): void {

    setCity(evt.target.value)

  }

  return (
    <form id="form" onSubmit={onFormSubmit}>
      <input type="text" placeholder='Digite a cidade e pressione enter' id="city-input" value={city} onChange={onCityChange} />
      <button type="submit">
        <ArrowForward></ArrowForward>
      </button>
    </form>
  )

}
