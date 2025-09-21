import { ActionTypes, type CheckoutData, type Product } from './types'

export function addProductAction(
  // This syntax ensures the function only requires an object
  // with the 'id' and 'quantity' properties, even if the Product type
  // has other properties added in the future (like 'price' or 'name').
  product: Omit<Product, 'quantity'> & { quantity: number },
) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      product,
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

export function incrementProductQuantityAction(id: string) {
  return {
    type: ActionTypes.INCREMENT_PRODUCT_QUANTITY,
    payload: {
      id,
    },
  }
}

export function decrementProductQuantityAction(id: string) {
  return {
    type: ActionTypes.DECREMENT_PRODUCT_QUANTITY,
    payload: {
      id,
    },
  }
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}

export function getCheckoutDataAction(checkoutData: CheckoutData) {
  return {
    type: ActionTypes.GET_CHECKOUT_DATA,
    payload: { checkoutData },
  }
}
