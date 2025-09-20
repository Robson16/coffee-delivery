export interface Product {
  id: string
  quantity: number
  title: string
  price: number
  image: string
}

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

interface DecrementProductQuantityAction {
  type: typeof ActionTypes.DECREMENT_PRODUCT_QUANTITY
  payload: {
    id: string
  }
}

export type Actions =
  | AddProductAction
  | RemoveProductAction
  | IncrementProductQuantityAction
  | DecrementProductQuantityAction
