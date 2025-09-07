import { HiShoppingCart } from 'react-icons/hi'
import { CartIconContainer } from './styles'

export function CartIcon() {
  return (
    <CartIconContainer to="/cart" title="Carrinho">
      <HiShoppingCart size={24} />
    </CartIconContainer>
  )
}
