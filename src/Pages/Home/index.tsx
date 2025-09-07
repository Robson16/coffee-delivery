import { HiShoppingCart } from 'react-icons/hi'
import { PiCoffeeFill, PiPackageFill, PiTimerFill } from 'react-icons/pi'
import CoffeeImage from '../../assets/coffee-image.png'
import {
  IconContainer,
  IconList,
  IconListItem,
  IntroContainer,
  IntroWrapper,
  Subtitle,
  Title,
} from './styles'

export function Home() {
  return (
    <IntroWrapper>
      <IntroContainer>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>

          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>

          <IconList>
            <IconListItem>
              <IconContainer bgColor="yellow-dark">
                <HiShoppingCart size={20} />
              </IconContainer>
              Compra simples e segura
            </IconListItem>

            <IconListItem>
              <IconContainer bgColor="base-text">
                <PiPackageFill size={20} />
              </IconContainer>
              Embalagem mantém o café intacto
            </IconListItem>

            <IconListItem>
              <IconContainer bgColor="yellow">
                <PiTimerFill size={20} />
              </IconContainer>
              Entrega rápida e rastreada
            </IconListItem>

            <IconListItem>
              <IconContainer bgColor="purple">
                <PiCoffeeFill size={20} />
              </IconContainer>
              O café chega fresquinho até você
            </IconListItem>
          </IconList>
        </div>
        <div>
          <img src={CoffeeImage} alt="Copo de café" />
        </div>
      </IntroContainer>
    </IntroWrapper>
  )
}
