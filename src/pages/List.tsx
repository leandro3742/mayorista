import mock from "../mock/components"
import '../styles/List.css'
import '../styles/Card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Product } from "../interfaces/product.interface"
import CardClient from "../components/CardClient"
import CardAdmin from "../components/CardAdmin"

const List = () => {

  const search = (e: any) => {
    e.preventDefault();
    alert('Buscando...')
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
        {mock.map((item: Product, index) => {
          if (sessionStorage.getItem('role') === 'client')
            return <CardClient item={item} key={index} />
          else if (sessionStorage.getItem('role') === 'admin')
            return <CardAdmin item={item} key={index} />
        })}
      </div>
    </>
  )
}

export default List