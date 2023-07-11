import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Graph from "../components/Graph"
import { faFilter } from "@fortawesome/free-solid-svg-icons"
import DialogGraph from "../components/DialogGraph"
import { useState } from "react"

const HistorySales = () => {
  const [openDialog, setOpenDialog] = useState(false)
  return (
    <div>
      <button onClick={() => setOpenDialog(true)} className="bg-green-200 m-3 p-1 rounded">
        <FontAwesomeIcon icon={faFilter} />
        <span>Filtros</span>
      </button>
      <DialogGraph
        open={openDialog}
        setOpen={setOpenDialog}
        options={{
          type: "barras",
          data: '',
          dateFrom: '',
          dateTo: ''
        }}
        setOptions={() => { }}

      />
      <Graph />
    </div>
  )
}

export default HistorySales