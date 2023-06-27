import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../styles/Counter.css'

interface props {
  value: number
  setValue: (value: number) => void
}
const Counter = (props: props) => {
  const { value, setValue } = props
  return (
    <div id="counter">
      <FontAwesomeIcon color={value > 1 ? "#5686E1" : "#D9D9D9"} icon={faMinus} onClick={() => setValue(value > 0 ? value - 1 : value)} />
      <input
        className="m-auto text-center"
        value={value}
        type="number"
        onChange={(e: any) => setValue(e.target.value)}
      />
      <FontAwesomeIcon color="#5686E1" icon={faPlus} onClick={() => setValue(value + 1)} />
    </div>
  )
}

export default Counter