import { useContext, useEffect } from 'react'
import { PiCurrencyDollar, PiMapPinFill, PiTimerFill } from 'react-icons/pi'
import { useTheme } from 'styled-components'
import deliveryMan from '../../assets/delivery-man.svg'
import { CartContext } from '../../contexts/CartContext'
import {
  Column,
  DeliverySummary,
  Heading,
  IconInfo,
  OrderPlacedContainer,
} from './styles'

export function OrderPlaced() {
  const theme = useTheme()
  const { checkoutData, clearCart } = useContext(CartContext)

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <OrderPlacedContainer>
      <Column>
        <Heading>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </Heading>
        <DeliverySummary>
          <IconInfo>
            <PiMapPinFill
              size={20}
              color={theme.colors.white}
              style={{ backgroundColor: theme.colors['secondary-dark'] }}
            />
            <address>
              Entrega em{' '}
              <strong>
                {checkoutData?.street}, {checkoutData?.number}
              </strong>
              <br />
              {checkoutData?.neighborhood} - {checkoutData?.city},{' '}
              {checkoutData?.state}
            </address>
          </IconInfo>
          <IconInfo>
            <PiTimerFill
              size={20}
              color={theme.colors.white}
              style={{ backgroundColor: theme.colors['primary'] }}
            />
            <p>
              Previsão de entrega: <br /> <strong>20 min - 30 min</strong>
            </p>
          </IconInfo>
          <IconInfo>
            <PiCurrencyDollar
              size={20}
              color={theme.colors.white}
              style={{ backgroundColor: theme.colors['primary-dark'] }}
            />
            <p>
              Pagamento na entrega: <br />
              <strong>
                {(checkoutData?.paymentMethod === 'credit' &&
                  'Cartão de Crédito') ||
                  (checkoutData?.paymentMethod === 'debit' &&
                    'Cartão de Débito') ||
                  (checkoutData?.paymentMethod === 'money' && 'Dinheiro') ||
                  ''}
              </strong>
            </p>
          </IconInfo>
        </DeliverySummary>
      </Column>
      <Column>
        <img src={deliveryMan} alt="Delivery Man" />
      </Column>
    </OrderPlacedContainer>
  )
}
