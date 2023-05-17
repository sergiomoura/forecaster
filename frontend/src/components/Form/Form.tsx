import { ArrowForward } from '@mui/icons-material'
import './Form.scss'
export function Form (): JSX.Element {

  return (
    <form id="form">
      <input type="text" id="city-input" value="Salvador" />
      <button type="submit">
        <ArrowForward></ArrowForward>
      </button>
    </form>
  )

}
