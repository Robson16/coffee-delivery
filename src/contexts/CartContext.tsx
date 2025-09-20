import { createContext } from 'react'
import type { Product } from '../reducers/cart/types'

interface CartContextType {
  products: Product[]
  productsSumPrice: number
  deliveryPrice: number
  totalPrice: number
  addProduct: (data: Product) => void
  removeProduct: (id: string) => void
  incrementProductQuantity: (id: string) => void
  decrementProductQuantity: (id: string) => void
}

export const CartContext = createContext({} as CartContextType)
