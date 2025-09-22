import { useContext } from 'react'
import { HiMapPin } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { CartContext } from '../../contexts/CartContext'
import { CartIcon } from '../CartIcon'
import { HeaderContainer, Location } from './styles'

export function Header() {
  const { checkoutData } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Coffee Delivery">
        <img src={logoCoffeeDelivery} alt="Logo do Coffee Delivery" />
      </NavLink>
      <nav>
        {checkoutData?.city && checkoutData.state && (
          <Location>
            <HiMapPin size={24} />
            {checkoutData?.city}, {checkoutData.state}
          </Location>
        )}
        <CartIcon to="/checkout" />
      </nav>
    </HeaderContainer>
  )
}
