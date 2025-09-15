import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const CartIconContainer = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.375rem; // 38px
  height: 2.375rem; // 38px
  color: ${(props) => props.theme.colors['primary-dark']};
  background-color: ${(props) => props.theme.colors['primary-light']};
  border-radius: 6px;
  transition: all 0.2s;

  span {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    padding: 0.25rem;
    font-weight: 700;
    font-size: ${(props) => props.theme.typography.text['text-s'].size};
    line-height: ${(props) => props.theme.typography.text['text-s'].lineHeight};
    border-radius: 100%;
    color: ${(props) => props.theme.colors['white']};
    background-color: ${(props) => props.theme.colors['primary-dark']};
  }

  svg {
    font-size: 1.125rem; // 18px
  }

  &:hover {
    color: ${(props) => props.theme.colors['primary-light']};
    background-color: ${(props) => props.theme.colors['primary']};
  }
`
