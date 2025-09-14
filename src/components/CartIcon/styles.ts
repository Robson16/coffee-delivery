import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const CartIconContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.375rem; // 38px
  height: 2.375rem; // 38px
  color: ${(props) => props.theme.colors['primary-dark']};
  background-color: ${(props) => props.theme.colors['primary-light']};
  border-radius: 6px;
  transition: all 0.2s;

  svg {
    font-size: 1.125rem; // 18px
  }

  &:hover {
    color: ${(props) => props.theme.colors['primary-light']};
    background-color: ${(props) => props.theme.colors['primary']};
  }
`
