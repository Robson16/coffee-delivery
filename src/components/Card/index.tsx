import { InputQuantity } from '../Form/InputQuantity'
import {
  Actions,
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
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: CardProps) {
  return (
    <Container>
      <CoffeeImage src={coffee.image} alt={coffee.title} />
      <Infos>
        <Tags>
          {coffee.tags.map((tag) => {
            return <span>{tag}</span>
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
          <InputQuantity />
        </Order>
      </Actions>
    </Container>
  )
}
