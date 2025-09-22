import { useCallback, useEffect, useReducer, type ReactNode } from 'react'
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

function getInitialState(initialState: typeof initialCartState) {
  const storedStateAsJSON = localStorage.getItem(
    '@coffee-delivery:cart-state-1.0.0',
  )

  if (storedStateAsJSON) {
    return JSON.parse(storedStateAsJSON)
  }

  return initialState
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    initialCartState,
    getInitialState,
  )

  const {
    products,
    checkoutData,
    productsSumPrice,
    deliveryPrice,
    totalPrice,
  } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

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
