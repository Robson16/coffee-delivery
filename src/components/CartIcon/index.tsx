import { useContext } from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import { CartContext } from '../../contexts/CartContext'
import { CartIconContainer } from './styles'

export function CartIcon() {
  const { products } = useContext(CartContext)

  return (
    <CartIconContainer to="/cart" title="Carrinho">
      {products.length > 0 && (
        <span>
          {products.reduce((total, product) => {
            return total + product.quantity
          }, 0)}
        </span>
      )}
      <HiShoppingCart size={24} />
    </CartIconContainer>
  )
}
