import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../styles/Counter.css'

interface props {
  value: number
  id: number
  setValue: ({ quantity, itemId }: { quantity: number, itemId: number }) => void
}
const Counter = (props: props) => {
  const { value, setValue, id } = props
  return (
    <div id="counter">
      <FontAwesomeIcon color={value > 1 ? "#5686E1" : "#D9D9D9"} icon={faMinus} onClick={() => value > 1 ? setValue({ quantity: value - 1, itemId: id }) : () => { }} />
      <input
        className="m-auto text-center"
        value={value}
        type="number"
        onChange={(e: any) => setValue({ quantity: e.target.value, itemId: id })}
      />
      <FontAwesomeIcon color="#5686E1" icon={faPlus} onClick={() => setValue({ quantity: value + 1, itemId: id })} />
    </div>
  )
}

export default Counter