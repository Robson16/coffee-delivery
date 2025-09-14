import { HiShoppingCart } from 'react-icons/hi'
import { PiCoffeeFill, PiPackageFill, PiTimerFill } from 'react-icons/pi'
import { useTheme } from 'styled-components'
import { coffees } from '../../../data.json'
import CoffeeImage from '../../assets/coffee-image.png'
import { CoffeeList, Intro, IntroContent } from './styles'
import { Card } from '../../components/Card'

export function Home() {
  const theme = useTheme()
  return (
    <>
      <Intro>
        <IntroContent>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>

            <ul>
              <li>
                <HiShoppingCart
                  size={32}
                  width={'fill'}
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['primary-dark'] }}
                />
                Compra simples e segura
              </li>

              <li>
                <PiPackageFill
                  size={32}
                  width={'fill'}
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['base-text'] }}
                />
                Embalagem mantém o café intacto
              </li>

              <li>
                <PiTimerFill
                  size={32}
                  width={'fill'}
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['primary'] }}
                />
                Entrega rápida e rastreada
              </li>

              <li>
                <PiCoffeeFill
                  size={32}
                  width={'fill'}
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['secondary'] }}
                />
                O café chega fresquinho até você
              </li>
            </ul>
          </div>
          <div>
            <img src={CoffeeImage} alt="Copo de café" />
          </div>
        </IntroContent>
      </Intro>
      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </>
  )
}
