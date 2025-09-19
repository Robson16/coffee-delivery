import styled, { css } from 'styled-components'

interface PaymentOptionProps {
  $isSelected?: boolean
}

export const PaymentOptionContainer = styled.label<PaymentOptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  text-transform: uppercase;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['base-button']};
  border: 1px solid transparent;

  ${(props) =>
    props.$isSelected &&
    css`
      background-color: ${(props) => props.theme.colors['secondary-light']};
      border-color: ${(props) => props.theme.colors.secondary};
    `}

  &:hover {
    background-color: ${(props) => props.theme.colors['base-hover']};
    cursor: pointer;
  }

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.colors.secondary};
  }

  span {
    font-size: ${(props) => props.theme.typography.button['button-m'].size};
    line-height: ${(props) =>
      props.theme.typography.button['button-m'].lineHeight};
    color: ${(props) => props.theme.colors['base-text']};
  }
`
