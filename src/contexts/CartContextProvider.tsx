import { useReducer, type ReactNode } from 'react'
import {
  addProductAction,
  decrementProductQuantityAction,
  IncrementProductQuantityAction,
  removeProductAction,
} from '../reducers/cart/actions'
import { cartReducer, type Product } from '../reducers/cart/reducer'
import { CartContext } from './CartContext'

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    products: [],
    productsSumPrice: 0,
    deliveryPrice: 0,
    totalPrice: 0,
  })

  const { products, productsSumPrice, deliveryPrice, totalPrice } = cartState

  function addProduct(data: Product) {
    const newProduct: Product = {
      id: data.id,
      quantity: data.quantity,
    }

    dispatch(addProductAction(newProduct))
  }

  function removeProduct(id: string) {
    dispatch(removeProductAction(id))
  }

  function incrementProductQuantity(id: string) {
    dispatch(IncrementProductQuantityAction(id))
  }

  function decrementProductQuantity(id: string) {
    dispatch(decrementProductQuantityAction(id))
  }

  return (
    <CartContext.Provider
      value={{
        products,
        productsSumPrice,
        deliveryPrice,
        totalPrice,
        addProduct,
        removeProduct,
        incrementProductQuantity,
        decrementProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
