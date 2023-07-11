import '../styles/DialogGraph.css'
interface props {
  open: boolean
  setOpen: any
  options: {
    type: string
    data: string
    dateFrom: string
    dateTo: string
  }
  setOptions: any
}
const DialogGraph = (props: props) => {
  const { open, setOpen, options, setOptions } = props
  // const [generate, setGenerate] = useState(false)

  if (open)
    return (
      <div id='container-dialog-graph'>
        <dialog open={open} id='dialog-graph'>
          <div>
            <h2>Seleccionar tipo de grafica</h2>
            <form className="flex flex-col ps-3">
              <div
                onClick={() => setOptions({
                  ...options,
                  type: 'barras'
                })}
              >
                <input type="radio"
                  name="graph"
                  checked={options.type === "barras"}
                  value="barras"
                />
                <label htmlFor="barras">Barras</label>
              </div>
              <div
                onClick={() => setOptions({
                  ...options,
                  type: 'pastel'
                })}
              >
                <input type="radio"
                  name="graph"
                  checked={options.type === "pastel"}
                  value="pastel"
                />
                <label htmlFor="pastel">Pastel</label>
              </div>
              <div
                onClick={() => setOptions({
                  ...options,
                  type: 'lineal'
                })}
              >
                <input type="radio"
                  name="graph"
                  checked={options.type === "lineal"}
                  value="lineal"
                />
                <label htmlFor="lineal">Lineal</label>
              </div>
            </form>
          </div>

          <div>
            <h2>Seleccionar tipo de datos</h2>
            <form className="flex flex-col ps-3">
              <div>
                <input type="radio" name="data" value="ventas" />
                <label htmlFor="ventas">Ventas</label>
              </div>
              <div>
                <input type="radio" name="data" value="clientes" />
                <label htmlFor="clientes">Clientes</label>
              </div>
              <div>
                <input type="radio" name="data" value="productos" />
                <label htmlFor="productos">Productos</label>
              </div>
            </form>
          </div>

          <div>
            <h2>Seleccionar rango de fechas</h2>
            <div className="flex flex-col ps-3">
              <>
                <label htmlFor="fecha-inicio" className="mt-1">Fecha de inicio</label>
                <input type="date" style={{ color: 'black' }} />
              </>
              <>
                <label htmlFor="fecha-fin" className="mt-1">Fecha de fin</label>
                <input type="date" style={{ color: 'black' }} />
              </>

            </div>
          </div>

          <div className="flex justify-around mt-5">
            <button className="btn close-dialog mx-5" onClick={() => setOpen(false)}>Cancelar</button>

            <button
              // className={`btn mx-5 ${!generate ? "disabledComp" : ''}`}
              onClick={() => setOpen(false)}
            >
              Generar
            </button>
          </div>

        </dialog>

      </div>
    )
}

export default DialogGraph