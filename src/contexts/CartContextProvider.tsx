import { useCallback, useReducer, type ReactNode } from 'react'
import {
  addProductAction,
  clearCartAction,
  decrementProductQuantityAction,
  getCheckoutDataAction,
  incrementProductQuantityAction,
  removeProductAction,
} from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'
import type { CheckoutData, Product } from '../reducers/cart/types'
import { CartContext } from './CartContext'

interface CartContextProviderProps {
  children: ReactNode
}

const initialCartState = {
  products: [] as Product[],
  checkoutData: {} as CheckoutData,
  productsSumPrice: 0,
  deliveryPrice: 0,
  totalPrice: 0,
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState)

  const {
    products,
    checkoutData,
    productsSumPrice,
    deliveryPrice,
    totalPrice,
  } = cartState

  const addProduct = useCallback(
    (data: Product) => {
      dispatch(addProductAction(data))
    },
    [dispatch],
  )

  const removeProduct = useCallback(
    (id: string) => {
      dispatch(removeProductAction(id))
    },
    [dispatch],
  )

  const incrementProductQuantity = useCallback(
    (id: string) => {
      dispatch(incrementProductQuantityAction(id))
    },
    [dispatch],
  )

  const decrementProductQuantity = useCallback(
    (id: string) => {
      dispatch(decrementProductQuantityAction(id))
    },
    [dispatch],
  )

  const clearCart = useCallback(() => {
    dispatch(clearCartAction())
  }, [dispatch])

  const getCheckoutData = useCallback(
    (data: typeof checkoutData) => {
      dispatch(getCheckoutDataAction(data))
    },
    [dispatch],
  )

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
