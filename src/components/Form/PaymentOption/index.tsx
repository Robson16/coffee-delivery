import type { InputHTMLAttributes } from 'react'
import { PaymentOptionContainer } from './styles'

interface PaymentOptionProps extends InputHTMLAttributes<HTMLInputElement> {
  isSelected?: boolean
}

export function PaymentOption({
  children,
  isSelected,
  ...rest
}: PaymentOptionProps) {
  return (
    <PaymentOptionContainer $isSelected={isSelected}>
      <input type="radio" {...rest} />
      {children}
    </PaymentOptionContainer>
  )
}
