import { useContext, useEffect, useState } from 'react'
import { HiCheck, HiShoppingCart } from 'react-icons/hi'
import { CartContext } from '../../contexts/CartContext'
import { InputQuantity } from '../Form/InputQuantity'
import {
  Actions,
  AddToCartButton,
  CardContainer,
  CoffeeImage,
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
  const { addProduct } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)
  const [isAddToCart, setIsAddToCart] = useState(false)

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
    setIsAddToCart(true)
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: number

    if (isAddToCart) {
      timeout = setTimeout(() => {
        setIsAddToCart(false)
      }, 2000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isAddToCart])

  return (
    <CardContainer>
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
          <AddToCartButton disabled={isAddToCart} onClick={handleAddProduct}>
            {isAddToCart ? <HiCheck size={20} /> : <HiShoppingCart size={20} />}
          </AddToCartButton>
        </Order>
      </Actions>
    </CardContainer>
  )
}
