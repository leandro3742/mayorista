// import mock from "../mock/components"
import '../styles/Cart.css'
import image from "../assets/images/cafe_americano.jpeg"
import Counter from "../components/Counter"
import { useEffect, useState } from "react"
import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useCartStore from "../state/cart.state"
// import { Product } from "../interfaces/product.interface"
// import { CartItem } from "../interfaces/cartItem.interface"

const Cart = () => {
  const { cart, removeItem, editItem } = useCartStore()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // const [value, setValue] = useState(1)
  const [hovered, setHovered] = useState(-1)
  // const [cartParse, setCartParse] = useState<Array<CartItem>>([])

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleHover = (index: number) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(-1);
  };

  const changeQuantity = ({ quantity, itemId }: { quantity: number, itemId: number }) => {
    const itemToChange = cart.find((element) => element.id === itemId)
    if (itemToChange === undefined) return
    itemToChange.quantity = quantity
    editItem(itemToChange)
  }

  const calculateTotal = (): number => {
    let total = 0
    cart.forEach((element) => {
      total += element.price * element.quantity
    })
    return total
  }

  return (
    <>
      {cart.length === 0
        ?
        <h1 className="text-center text-3xl">No hay productos en el carrito</h1>
        :
        <div id="cart">
          {cart.map((item, index) => (
            <div key={index} style={{ backgroundColor: '#D9D9D9', position: 'relative', display: 'inline-block' }} className="font-serif card-product flex flex-col items-center">
              <div
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleMouseLeave}
              >
                {windowWidth > 768 && <FontAwesomeIcon onClick={() => removeItem(item)} style={{ fontSize: '30px' }} icon={faXmark} id={hovered === index ? 'removeProduct-hover' : 'removeProduct'} />}
                <img src={image} alt="cafe" />
              </div>
              <section>
                <h1 className="text-center text-3xl">{item.name}</h1>
                <section className="mt-3 flex flex-col items-start text-xl">
                  <section className="flex items-center">
                    <p style={{ color: '#2F2F2F' }}>Precio: </p>
                    <p className="ms-3 italic"> ${item.price}</p>
                  </section>
                  <section className="flex items-center">
                    <p style={{ color: '#2F2F2F' }}>Stock:</p>
                    <p className="ms-3 italic">{item.stock}</p>
                  </section>
                  <div className="flex">
                    <p style={{ color: '#2F2F2F' }}>Cantidad: </p>
                    <div className="ms-3 italic">
                      <Counter value={item.quantity} setValue={changeQuantity} id={item.id} />
                    </div>
                  </div>
                </section>
                <div className="mt-4 flex justify-between items-center">
                  {windowWidth < 768 &&
                    <button className="btn-error" onClick={() => removeItem(item)}>
                      <span className="text-black">Eliminar</span>
                      <FontAwesomeIcon icon={faTrash} color="#5686e1" className="ms-3" />
                    </button>
                  }
                  <div className="text-xl font-serif">
                    <span>Precio total: </span>
                    <span className="italic font-bold">${item.price * item.quantity}</span>
                  </div>
                </div>
              </section>
            </div>
          ))}
          <section className="flex justify-end p-3">
            <div id='showPrice' className="flex flex-col text-xl font-serif">
              <div>
                <span>Subtotal: </span>
                <span className="italic font-semibold">${calculateTotal()}</span>
              </div>
              <div>
                <span>Impuestos: </span>
                <span className="italic font-semibold">${(calculateTotal() * 0.22).toFixed(0)}</span>
              </div>
              <div>
                <span>Total: </span>
                <span className="italic font-semibold">${(calculateTotal() * 1.22).toFixed(0)}</span>
              </div>
              <div className="flex justify-end mt-3">
                <button className="cart-btn-generateOrder">Generar pedido</button>
              </div>
            </div>
          </section>
        </div>
      }
    </>
  )
}

export default Cart