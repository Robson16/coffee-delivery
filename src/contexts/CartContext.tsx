import { createContext } from 'react'
import type { CheckoutData, Product } from '../reducers/cart/types'

interface CartContextType {
  products: Product[]
  checkoutData: CheckoutData
  productsSumPrice: number
  deliveryPrice: number
  totalPrice: number
  addProduct: (data: Product) => void
  removeProduct: (id: string) => void
  incrementProductQuantity: (id: string) => void
  decrementProductQuantity: (id: string) => void
  getCheckoutData: (data: CheckoutData) => void
}

export const CartContext = createContext({} as CartContextType)
