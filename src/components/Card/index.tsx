import { useContext, useEffect, useState } from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import { CartContext } from '../../contexts/CartContext'
import { InputQuantity } from '../Form/InputQuantity'
import {
  Actions,
  AddToCartButton,
  CoffeeImage,
  Container,
  Description,
  Infos,
  Order,
  Price,
  Tags,
  Title,
} from './styles'

interface CardProps {
  coffee: {
    id: string
    title: string
    description: string
    tags: Array<{
      id: string
      name: string
    }>
    price: number
    image: string
  }
}

export function Card({ coffee }: CardProps) {
  const { products, addProduct } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  function handleIncrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddProduct() {
    addProduct({ id: coffee.id, quantity })
    setQuantity(1)
  }

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <Container>
      <CoffeeImage src={coffee.image} alt={coffee.title} />
      <Infos>
        <Tags>
          {coffee.tags.map((tag) => {
            return <span key={tag.id}>{tag.name}</span>
          })}
        </Tags>
        <Title>{coffee.title}</Title>
        <Description>{coffee.description}</Description>
      </Infos>
      <Actions>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>
        <Order>
          <InputQuantity
            quantity={quantity}
            incrementQuantity={handleIncrementQuantity}
            decrementQuantity={handleDecrementQuantity}
          />
          <AddToCartButton onClick={handleAddProduct}>
            <HiShoppingCart size={20} />
          </AddToCartButton>
        </Order>
      </Actions>
    </Container>
  )
}
