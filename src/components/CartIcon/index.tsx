import { useContext } from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import { type NavLinkProps } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { CartIconContainer } from './styles'

interface CartIconProps extends NavLinkProps {}

export function CartIcon({ ...rest }: CartIconProps) {
  const { products } = useContext(CartContext)

  const totalQuantity = products.reduce((total, product) => {
    return total + product.quantity
  }, 0)

  return (
    <CartIconContainer {...rest}>
      {totalQuantity > 0 && <span>{totalQuantity}</span>}
      <HiShoppingCart size={24} />
    </CartIconContainer>
  )
}
