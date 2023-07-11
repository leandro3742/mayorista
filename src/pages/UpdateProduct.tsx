import { useEffect, useState, useRef } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchComponent } from "../api/component"
import { Product } from "../interfaces/product.interface"
import { toast } from "react-toastify"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faXmark } from "@fortawesome/free-solid-svg-icons"
import notImage from '../assets/notImage.jpeg'

const UpdateProduct = () => {
  const { id } = useParams()
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [component, setComponent] = useState({} as Product)

  const getComponent = async () => {
    if (!id) return
    try {
      const resp = await fetchComponent(id)
      if (resp.status === 200)
        setComponent(resp.data)
      else
        toast.error(resp.message)
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getComponent()
  }, [])


  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result as string;
        setComponent({ ...component, image: imageUrl })
      };
      reader.readAsDataURL(file);
    }
  };
  const createComponent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div>
      <Link to='/list-products'>
        <button className="m-2 p-2 bg-green-300" style={{ borderRadius: '15px 5px 5px 15px' }}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            color="#5686e1"
            className="mr-2"
          />
          <span>Volver</span>
        </button>
      </Link>
      {component.name && (
        <form className="flex flex-col justify-center items-center mt-4" onSubmit={createComponent}>
          <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
          <figure id='figure-product' >
            <div id='container-icon'>
              {component.image && <FontAwesomeIcon
                onClick={() => setComponent({ ...component, image: '' })}
                id='icon-xmark'
                icon={faXmark}
                color="#5686e1"
              />}
            </div>
            <img src={component.image ? component.image : notImage} className="fluid" style={{ maxHeight: '200px' }} />
          </figure>
          <button type='button' className="btn-primary mt-4" onClick={handleButtonClick}>Agregar imagen</button>
          <input
            name="productName"
            type="text"
            placeholder="Nombre del producto"
            className="mt-4 m-auto"
            value={component.name}
          />
          <textarea
            name="description"
            style={{ height: '100px', width: '250px' }}
            placeholder="Descripción del producto"
            className="mt-4 m-auto"
            value={component.description}
          />
          <input
            name="price"
            type="number"
            placeholder="Precio del producto"
            className="mt-4 m-auto"
            value={component.price}
          />
          <input
            name="stock"
            type="number"
            placeholder="Cantidad del producto"
            className="mt-4 m-auto"
            value={component.stock}
          />
          <button type="submit" style={{ width: '250px', backgroundColor: '#a6d6ca', color: 'black' }} className="btn-primary mt-4">Guardar cambios</button>
        </form>
      )}
    </div>
  )
}

export default UpdateProduct