import type { Product } from './reducer'

export const ActionTypes = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  INCREMENT_PRODUCT_QUANTITY: 'INCREMENT_PRODUCT_QUANTITY',
  DECREMENT_PRODUCT_QUANTITY: 'DECREMENT_PRODUCT_QUANTITY',
} as const

interface AddProductAction {
  type: typeof ActionTypes.ADD_PRODUCT
  payload: {
    id: string
    quantity: number
    title: string
    price: number
    image: string
  }
}

interface RemoveProductAction {
  type: typeof ActionTypes.REMOVE_PRODUCT
  payload: {
    id: string
  }
}

interface IncrementProductQuantityAction {
  type: typeof ActionTypes.INCREMENT_PRODUCT_QUANTITY
  payload: {
    id: string
  }
}
interface decrementProductQuantityAction {
  type: typeof ActionTypes.DECREMENT_PRODUCT_QUANTITY
  payload: {
    id: string
  }
}

export type Actions =
  | AddProductAction
  | RemoveProductAction
  | IncrementProductQuantityAction
  | decrementProductQuantityAction

export function addProductAction(
  // This syntax ensures the function only requires an object
  // with the 'id' and 'quantity' properties, even if the Product type
  // has other properties added in the future (like 'price' or 'name').
  product: Omit<Product, 'quantity'> & { quantity: number },
) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      id: product.id,
      quantity: product.quantity,
      title: product.title,
      price: product.price,
      image: product.image,
    },
  }
}

export function removeProductAction(id: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      id,
    },
  }
}

export function IncrementProductQuantityAction(id: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      id,
    },
  }
}

export function decrementProductQuantityAction(id: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      id,
    },
  }
}
