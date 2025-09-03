import { HiMapPin } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg';
import { CartIcon } from '../CartIcon';
import { HeaderContainer, Location } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Coffee Delivery">
        <img src={logoCoffeeDelivery} alt="Logo do Coffee Delivery" />
      </NavLink>
      <nav>
        <Location>
          <HiMapPin size={24} />
          Jundiaí, SP
        </Location>
        <CartIcon />
      </nav>
    </HeaderContainer>
  )
}