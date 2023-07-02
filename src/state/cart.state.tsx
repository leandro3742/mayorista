import { create } from 'zustand'
import { CartItem } from '../interfaces/cartItem.interface'

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item: CartItem) => set((state: Array<CartItem>) => ({ cart: [...state, item] })),
  removeElement: (item: CartItem) => set((state: Array<CartItem>) => ({ cart: state.filter((element) => element.id !== item.id) })),
}))

export default useCartStore