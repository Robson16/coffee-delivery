import { produce } from 'immer'
import { ActionTypes, type Actions } from './actions'

export interface Product {
  id: string
  quantity: number
  title: string
  price: number
  image: string
}

interface CartState {
  products: Product[]
  productsSumPrice: number
  deliveryPrice: number
  totalPrice: number
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      const { id, quantity, title, price, image } = action.payload

      return produce(state, (draft) => {
        // Find the index of the product in the cart
        const productIndex = draft.products.findIndex(
          (product) => product.id === id,
        )

        // If the product doesn't exist, add a new one
        if (productIndex < 0) {
          draft.products.push({ id, quantity, title, price, image })
        } else {
          // If the product already exists, update its quantity
          draft.products[productIndex].quantity += quantity
        }
      })
    }
    case ActionTypes.REMOVE_PRODUCT: {
      const { id } = action.payload

      return produce(state, (draft) => {
        // Find the index of the product in the cart
        const productToRemoveIndex = draft.products.findIndex(
          (product) => product.id === id,
        )

        // Only proceed if the product is found
        if (productToRemoveIndex >= 0) {
          draft.products.splice(productToRemoveIndex, 1)
        }
      })
    }
    case ActionTypes.INCREMENT_PRODUCT_QUANTITY: {
      const { id } = action.payload

      return produce(state, (draft) => {
        // Find the index of the product in the cart
        const productToIncrementIndex = draft.products.findIndex(
          (product) => product.id === id,
        )

        // Only proceed if the product is found
        if (productToIncrementIndex >= 0) {
          draft.products[productToIncrementIndex].quantity += 1
        }
      })
    }
    case ActionTypes.DECREMENT_PRODUCT_QUANTITY: {
      const { id } = action.payload

      return produce(state, (draft) => {
        // Find the index of the product in the cart
        const productToDecrementIndex = draft.products.findIndex(
          (product) => product.id === id,
        )

        // Only proceed if the product is found
        if (productToDecrementIndex >= 0) {
          draft.products[productToDecrementIndex].quantity -= 1
        }
      })
    }
    default:
      return state
  }
}
