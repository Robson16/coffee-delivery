import { useEffect, useState } from 'react'
import { InputQuantity } from '../../Form/InputQuantity'
import {
  Actions,
  CardMiniContainer,
  Infos,
  Price,
  ProductImage,
  Title,
} from './styles'

interface CardMiniProps {
  product: {
    id: string
    quantity: number
    title: string
    price: number
    image: string
  }
}

export function CardMini({ product }: CardMiniProps) {
  const [quantity, setQuantity] = useState(1)

  function handleIncrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  return (
    <CardMiniContainer>
      <ProductImage src={product.image} alt={product.title} />
      <Infos>
        <Title>{product.title}</Title>
        <Price>
          <span>R$</span>
          <span>{product.price.toFixed(2)}</span>
        </Price>
      </Infos>
      <Actions>
        <InputQuantity
          quantity={quantity}
          incrementQuantity={handleIncrementQuantity}
          decrementQuantity={handleDecrementQuantity}
        />
      </Actions>
    </CardMiniContainer>
  )
}
