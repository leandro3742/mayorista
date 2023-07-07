import { useRef, useState } from "react";
import notImage from '../assets/notImage.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import '../styles/CreateProduct.css'

const CreateProduct = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | undefined>(undefined);

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
        setImagePreview(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };
  const createComponent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form className="flex flex-col justify-center items-center mt-4" onSubmit={createComponent}>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
      <figure id='figure-product' >
        <div id='container-icon'>
          {imagePreview && <FontAwesomeIcon
            onClick={() => setImagePreview(undefined)}
            id='icon-xmark'
            icon={faXmark}
            color="#5686e1"
          />}
        </div>
        <img src={imagePreview ? imagePreview : notImage} className="fluid" style={{ maxHeight: '200px' }} />
      </figure>
      <button type='button' className="btn-primary mt-4" onClick={handleButtonClick}>{imagePreview ? 'Editar' : 'Agregar'} imagen</button>
      <input
        name="productName"
        type="text"
        placeholder="Nombre del producto"
        className="mt-4 m-auto"
      />
      <textarea
        name="description"
        style={{ height: '100px', width: '250px' }}
        placeholder="Descripción del producto"
        className="mt-4 m-auto"
      />
      <input
        name="price"
        type="number"
        placeholder="Precio del producto"
        className="mt-4 m-auto"
      />
      <input
        name="stock"
        type="number"
        placeholder="Cantidad del producto"
        className="mt-4 m-auto"
      />
      <button type="submit" style={{ width: '250px', backgroundColor: '#a6d6ca', color: 'black' }} className="btn-primary mt-4">Crear producto</button>
    </form>
  )
}

export default CreateProduct