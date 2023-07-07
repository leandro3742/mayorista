import { Product } from "../interfaces/product.interface";
import components from "../mock/components";

interface ComponentInterace {
  status: number,
  message: string,
  data: Product
}
export const fetchComponent = (id: string): Promise<ComponentInterace> => {
  // return fetch(`http://localhost:3001/products/${id}`)
  //   .then(res => res.json())
  //   .then(data => data)
  const product = components.find((element) => element.id.toString() === id)
  if (!product)
    return Promise.reject(new Error('No existe el producto'))

  const response = {
    status: 200,
    message: '',
    data: product
  }
  return Promise.resolve(response)
}