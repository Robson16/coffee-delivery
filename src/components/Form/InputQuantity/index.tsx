import { FiMinus, FiPlus } from 'react-icons/fi'
import { Button, InputNumberContainer } from './styles'
import { useState } from 'react'

export function InputQuantity() {
  const [quantity, setQuantity] = useState(1)

  function handleQuantityChange(modifier: number) {
    setQuantity((state) => {
      // Calculates the new value
      const newQuantity = state + modifier
      // Returns the greater value between 'newQuantity' and 1,
      // ensuring that the result is never less than 1
      return Math.max(newQuantity, 1)
    })
  }

  return (
    <InputNumberContainer>
      <Button onClick={() => handleQuantityChange(1)}>
        <FiPlus size={14} />
      </Button>
      <span>{quantity}</span>
      <Button onClick={() => handleQuantityChange(-1)}>
        <FiMinus size={14} />
      </Button>
    </InputNumberContainer>
  )
}
