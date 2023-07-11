import { useState } from 'react'
import '../styles/Sales.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const salesMock = [
  {
    id: 1,
    products: [
      {
        id: 1,
        name: 'Producto 1',
        quantity: 2,
        price: 200,
      },
      {
        id: 1,
        name: 'Producto 1',
        quantity: 2,
        price: 200,
      },
      {
        id: 1,
        name: 'Producto 1',
        quantity: 2,
        price: 200,
      },
    ],
    totalPrice: 230,
    status: 'paid',
    createdAt: '2021-09-01',
    client: {
      id: 1,
      name: 'Juan',
      email: '',
      address: '',
      phone: '',
    },
  },
  {
    id: 2,
    products: [
      {
        id: 1,
        name: 'Producto 1',
        quantity: 2,
        price: 200,
      },
      {
        id: 1,
        name: 'Producto 1',
        quantity: 2,
        price: 200,
      },
    ],
    totalPrice: 230,
    status: 'paid',
    createdAt: '2021-09-01',
    client: {
      id: 1,
      name: 'Juan',
      email: '',
      address: '',
      phone: '',
    },
  },
  {
    id: 3,
    products: [
      {
        id: 1,
        name: 'Producto 1',
        quantity: 2,
        price: 200,
      },
      {
        id: 1,
        name: 'Producto 1',
        quantity: 2,
        price: 200,
      },
      {
        id: 1,
        name: 'Producto 1',
        quantity: 2,
        price: 200,
      },
      {
        id: 1,
        name: 'Producto 1',
        quantity: 2,
        price: 200,
      },
      {
        id: 1,
        name: 'Producto 1',
        quantity: 2,
        price: 200,
      },
      {
        id: 1,
        name: 'Producto 1',
        quantity: 2,
        price: 200,
      },
      {
        id: 1,
        name: 'Producto 1',
        quantity: 2,
        price: 200,
      },
      {
        id: 1,
        name: 'Producto 1',
        quantity: 2,
        price: 200,
      },
      {
        id: 1,
        name: 'Producto 1',
        quantity: 2,
        price: 200,
      },
    ],
    totalPrice: 230,
    status: 'paid',
    createdAt: '2021-09-01',
    client: {
      id: 1,
      name: 'Juan',
      email: '',
      address: '',
      phone: '',
    },
  }
]
const Sales = () => {
  const [openModal, setOpenModal] = useState<any>([]);

  return (
    <div className="">
      <div style={{ opacity: openModal.length > 0 ? '0.5' : '1' }} className="flex flex-wrap justify-around">
        {salesMock.map(sale => (
          <div key={sale.id} className="card-sales mt-3 p-3 rounded">
            <header>
              <p className='text-xl'>{sale.client.name}</p>
            </header>
            <div className='flex justify-end mt-4'>
              <button className='button-sales' onClick={() => setOpenModal(sale.products)}>Ver productos comprados</button>
            </div>
            <div className='flex flex-col justify-end mt-4'>
              <p className=''>Fecha: {sale.createdAt}</p>
              <p className='font-sans '>Total: ${sale.totalPrice}</p>
            </div>
            <div className='flex justify-center'>
              <button className="generatePDF p-2">Generar recibo</button>
            </div>
          </div>
        ))}
      </div>
      {openModal.length > 0 && (
        <div className='container-dialog'>
          <dialog className='rounded-md' open={true}>
            <div className='flex justify-end'>
              <button className='close' onClick={() => setOpenModal([])}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <section className='list-products'>
              <table className='table-products'>
                <thead className='p-4'>
                  <tr className=''>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Total $</th>
                  </tr>
                </thead>
                <tbody>
                  {openModal.map((product: any, index: number) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'isPair' : 'isOdd'}`}>
                      <td>{product.name}</td>
                      <td className='text-center'>{product.quantity}</td>
                      <td className='text-end'>{product.quantity * product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </dialog>
        </div>

      )}
    </div>
  )
}

export default Sales