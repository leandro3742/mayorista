import { Link } from "react-router-dom";
import { Product } from "../interfaces/product.interface"
interface Props {
  item: Product
}

const CardAdmin = (props: Props) => {
  const { item } = props

  return (
    <div style={{ backgroundColor: '#D9D9D9' }} className="card-product flex flex-col items-center">
      <img src={item.image} alt="cafe" />
      <section>
        <h1 className="text-center text-3xl">{item.name}</h1>
        <section className="flex flex-col items-start">
          <section className="flex items-center">
            <p>Precio: </p>
            <p className="text-xl"> ${item.price}</p>
          </section>
          <section className="flex items-center">
            <p>Stock:</p>
            <p className="text-xl">{item.stock}</p>
          </section>
          <section className="flex items-center">
            <p>Categoria:</p>
            <p className="text-xl">{item.category}</p>
          </section>

        </section>
        <div className="card-buttons">
          <Link to={`/update/${item.id}`} className="btn-primary" >Editar</Link>
          <button className="btn-error">Eliminar</button>
        </div>
      </section>
    </div>
  )
}

export default CardAdmin