import { useContext, useState } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { formatCurrency } from '../../../util/formatCurrency'
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
  const [quantity, setQuantity] = useState(product.quantity)
  const { incrementProductQuantity, decrementProductQuantity } =
    useContext(CartContext)

  function handleIncrementQuantity() {
    setQuantity((prev) => prev + 1)
    incrementProductQuantity(product.id)
  }

  function handleDecrementQuantity() {
    // Prevents quantity from going below 1
    if (quantity <= 1) return

    setQuantity((prev) => prev - 1)
    decrementProductQuantity(product.id)
  }

  return (
    <CardMiniContainer>
      <ProductImage src={product.image} alt={product.title} />
      <Infos>
        <Title>{product.title}</Title>
        <Price>
          <span>R$</span>
          <span>{formatCurrency(product.price, 'pt-BR', 'BRL', false)}</span>
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
