import { produce } from 'immer'
import {
  ActionTypes,
  type Actions,
  type CheckoutData,
  type Product,
} from './types'

interface CartState {
  products: Product[]
  checkoutData: CheckoutData
  productsSumPrice: number
  deliveryPrice: number
  totalPrice: number
}

const DELIVERY_FEE = 3.5

function calculatePrices(products: Product[]) {
  const productsSumPrice = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  )
  const deliveryPrice = products.length > 0 ? DELIVERY_FEE : 0
  const totalPrice = productsSumPrice + deliveryPrice

  return { productsSumPrice, deliveryPrice, totalPrice }
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

        const prices = calculatePrices(draft.products)
        draft.productsSumPrice = prices.productsSumPrice
        draft.deliveryPrice = prices.deliveryPrice
        draft.totalPrice = prices.totalPrice
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

          const prices = calculatePrices(draft.products)
          draft.productsSumPrice = prices.productsSumPrice
          draft.deliveryPrice = prices.deliveryPrice
          draft.totalPrice = prices.totalPrice
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

          const prices = calculatePrices(draft.products)
          draft.productsSumPrice = prices.productsSumPrice
          draft.deliveryPrice = prices.deliveryPrice
          draft.totalPrice = prices.totalPrice
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

          const prices = calculatePrices(draft.products)
          draft.productsSumPrice = prices.productsSumPrice
          draft.deliveryPrice = prices.deliveryPrice
          draft.totalPrice = prices.totalPrice
        }
      })
    }
    case ActionTypes.CLEAR_CART: {
      return produce(state, (draft) => {
        draft.products = []
        draft.productsSumPrice = 0
        draft.deliveryPrice = 0
        draft.totalPrice = 0
      })
    }
    case ActionTypes.GET_CHECKOUT_DATA: {
      const { checkoutData } = action.payload

      return produce(state, (draft) => {
        draft.checkoutData = checkoutData
      })
    }
    default:
      return state
  }
}
