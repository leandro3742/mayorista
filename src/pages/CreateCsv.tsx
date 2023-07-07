
const CreateCsv = () => {
  return (
    <div>
      <h1>Descarga todos tus datos</h1>
      <button className="btn-primary">Descargar CSV</button>
      <div>
        <h2>¿Cómo importar un CSV?</h2>
        <p>Para importar un CSV, debes tener en cuenta que el archivo debe tener el siguiente formato:</p>
        <p>id, name, description, price, stock, image</p>
        <p>1, Camiseta, Camiseta de algodón, 10, 10, https://www.google.com</p>
        <p>2, Camiseta, Camiseta de algodón, 10, 10, https://www.google.com</p>
        <p>3, Camiseta, Camiseta de algodón, 10, 10, https://www.google.com</p>
      </div>
      <div>
        <h2>¿Cómo exportar un CSV?</h2>
        <p>Para exportar un CSV, debes tener en cuenta que el archivo debe tener el siguiente formato:</p>
        <p>id, name, description, price, stock, image</p>
        <p>1, Camiseta, Camiseta de algodón, 10, 10, https://www.google.com</p>
        <p>2, Camiseta, Camiseta de algodón, 10, 10, https://www.google.com</p>
      </div>
    </div>
  )
}

export default CreateCsv