export interface Product {
  id: string
  quantity: number
  title: string
  description: string
  tags: Array<{
    id: string
    name: string
  }>
  price: number
  image: string
}

export interface CheckoutData {
  cep: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'money'
}

export const ActionTypes = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  INCREMENT_PRODUCT_QUANTITY: 'INCREMENT_PRODUCT_QUANTITY',
  DECREMENT_PRODUCT_QUANTITY: 'DECREMENT_PRODUCT_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  GET_CHECKOUT_DATA: 'GET_CHECKOUT_DATA',
} as const

interface AddProductAction {
  type: typeof ActionTypes.ADD_PRODUCT
  payload: {
    product: Product
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

interface ClearCartAction {
  type: typeof ActionTypes.CLEAR_CART
}

interface GetCheckoutDataAction {
  type: typeof ActionTypes.GET_CHECKOUT_DATA
  payload: {
    checkoutData: CheckoutData
  }
}

export type Actions =
  | AddProductAction
  | RemoveProductAction
  | IncrementProductQuantityAction
  | DecrementProductQuantityAction
  | ClearCartAction
  | GetCheckoutDataAction
