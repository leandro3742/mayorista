import { create } from 'zustand'
import { CartItem } from '../interfaces/cartItem.interface'
// import { Product } from '../interfaces/product.interface'

interface CartStore {
  cart: Array<CartItem>
  addItem: (item: CartItem) => void
  removeItem: (item: CartItem) => void
  editItem: (item: CartItem) => void
}

const useCartStore = create<CartStore>()((set) => ({
  cart: [],
  addItem: (item: CartItem) => set((state: CartStore) => {
    const existItem = state.cart.find((element) => element.id === item.id)
    if (existItem) {
      return { cart: state.cart.map((element) => element.id === item.id ? { ...element, quantity: element.quantity + 1 } : element) }
    }
    return { cart: [...state.cart, item] }
  }),
  removeItem: (item: CartItem) => set((state: CartStore) => ({ cart: state.cart.filter((element) => element.id !== item.id) })),
  editItem: (item: CartItem) => set((state: CartStore) => ({ cart: state.cart.map((element) => element.id === item.id ? { ...element } : element) })),
  // changeQuantity: (item: Product | CartItem, quantity: number) => set(
  //   (state: CartStore) => {
  //     const sameItem = state.cart.find((element) => element.id === item.id)

  //     return {
  //       cart: state.cart.map(
  //         (element) => element.id === item.id
  //           ?
  //           { ...element, quantity }
  //           : element)
  //     }
  //   }
  // ),
}))

// const useCartStore = create<CartStore>()((set) => ({
//   cart: [],
//   addItem: (item: CartItem) => set((state) => ({ cart: [...state, item] })),
//   removeItem: (item: CartItem) => set((state: Array<CartItem>) => ({ cart: state.filter((element) => element.id !== item.id) })),
// }))

export default useCartStore