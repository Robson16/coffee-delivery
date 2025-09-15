import { FiMinus, FiPlus } from 'react-icons/fi'
import { Button, InputNumberContainer } from './styles'

interface InputQuantityProps {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function InputQuantity({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: InputQuantityProps) {
  return (
    <InputNumberContainer>
      <Button onClick={incrementQuantity}>
        <FiPlus size={14} />
      </Button>
      <span>{quantity}</span>
      <Button onClick={decrementQuantity}>
        <FiMinus size={14} />
      </Button>
    </InputNumberContainer>
  )
}
