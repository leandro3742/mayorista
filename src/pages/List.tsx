import mock from "../mock/components"
import image from "../assets/images/cafe_americano.jpeg"
import '../styles/List.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { toast } from "react-toastify"
const List = () => {
  const search = (e: any) => {
    e.preventDefault();
    alert('Buscando...')
  }

  const addToCart = () => {
    toast.success('Producto agregado al carrito')
  }
  return (
    <>
      <form
        onSubmit={search}
        className="search m-auto flex justify-center mt-3 items-center"
      >
        <input />
        <FontAwesomeIcon type='submit' onClick={search} icon={faMagnifyingGlass} style={{ cursor: 'pointer' }} />
      </form>
      <div className="mt-3 flex flex-wrap justify-center">
        {mock.map((item, index) => (
          <div key={index} style={{ backgroundColor: '#D9D9D9' }} className="card-product flex flex-col items-center">
            <img src={image} alt="cafe" />
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
              </section>
              <div className="flex justify-end">
                <button className="btn-primary" onClick={addToCart}>Agregar</button>
              </div>
            </section>
          </div>
        ))}
      </div>
    </>
  )
}

export default List