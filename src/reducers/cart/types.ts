export interface Product {
  id: string
  quantity: number
  title: string
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
  GET_CHECKOUT_DATA: 'GET_CHECKOUT_DATA',
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
  | GetCheckoutDataAction
