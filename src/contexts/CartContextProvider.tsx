import { useReducer, type ReactNode } from 'react'
import {
  addProductAction,
  clearCartAction,
  decrementProductQuantityAction,
  getCheckoutDataAction,
  incrementProductQuantityAction,
  removeProductAction,
} from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'
import type { Product } from '../reducers/cart/types'
import { CartContext } from './CartContext'

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    products: [],
    checkoutData: {
      cep: '',
      street: '',
      number: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: 'credit',
    },
    productsSumPrice: 0,
    deliveryPrice: 0,
    totalPrice: 0,
  })

  const {
    products,
    checkoutData,
    productsSumPrice,
    deliveryPrice,
    totalPrice,
  } = cartState

  function addProduct(data: Product) {
    const newProduct: Product = {
      id: data.id,
      quantity: data.quantity,
      title: data.title,
      price: data.price,
      image: data.image,
    }

    dispatch(addProductAction(newProduct))
  }

  function removeProduct(id: string) {
    dispatch(removeProductAction(id))
  }

  function incrementProductQuantity(id: string) {
    dispatch(incrementProductQuantityAction(id))
  }

  function decrementProductQuantity(id: string) {
    dispatch(decrementProductQuantityAction(id))
  }

  function clearCart() {
    dispatch(clearCartAction())
  }

  function getCheckoutData(data: typeof checkoutData) {
    dispatch(getCheckoutDataAction(data))
  }

  return (
    <CartContext.Provider
      value={{
        products,
        checkoutData,
        productsSumPrice,
        deliveryPrice,
        totalPrice,
        addProduct,
        removeProduct,
        incrementProductQuantity,
        decrementProductQuantity,
        clearCart,
        getCheckoutData,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
