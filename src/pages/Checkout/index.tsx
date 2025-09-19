import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { FiMapPin } from 'react-icons/fi'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { PiBank, PiCreditCard, PiCurrencyDollar } from 'react-icons/pi'
import { useTheme } from 'styled-components'
import zod from 'zod'
import { CardMini } from '../../components/Card/CardMini'
import { InputText } from '../../components/Form/InputText'
import { PaymentOption } from '../../components/Form/PaymentOption'
import { CartContext } from '../../contexts/CartContext'
import {
  AddressFormGrid,
  CheckoutContainer,
  Column,
  DeliveryDetails,
  Form,
  gridAreas,
  Heading,
  OrderReview,
  PaymentMethod,
  PaymentOptionsGrid,
} from './styles'

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().regex(/^(\d{5}-\d{3}|\d{8})$/, {
    message: 'CEP inválido. Use o formato XXXXX-XXX ou XXXXXXXX.',
  }),
  street: zod.string().nonempty('Informe a rua'),
  number: zod.string().nonempty('Informe o número'),
  complement: zod.string().optional(),
  neighborhood: zod.string().nonempty('Informe o bairro'),
  city: zod.string().nonempty('Informe a cidade'),
  state: zod
    .string()
    .nonempty('Informe a UF')
    .length(2, 'UF deve ter 2 caracteres'),
  paymentMethod: zod.enum(['credit', 'debit', 'money'], {
    message: 'Informe um método de pagamento',
  }),
})

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const theme = useTheme()
  const { products } = useContext(CartContext)
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      neighborhood: '',
      city: '',
      state: '',
    },
    mode: 'onTouched',
  })

  const { register, handleSubmit, watch, formState, reset } = checkoutForm

  const { isValid, errors } = formState

  const selectedPaymentMethod = watch('paymentMethod')

  function handleCreateNewOrder(data: CheckoutFormData) {
    console.log(data)
    reset()
  }

  return (
    <CheckoutContainer>
      <Form onSubmit={handleSubmit(handleCreateNewOrder)}>
        <Column>
          <h2>Complete seu pedido</h2>
          <DeliveryDetails>
            <Heading>
              <FiMapPin size={22} color={theme.colors.primary} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </Heading>

            <AddressFormGrid>
              <InputText
                gridArea={gridAreas.CEP}
                id="cep"
                placeholder="CEP"
                error={errors.cep}
                {...register('cep')}
              />
              <InputText
                gridArea={gridAreas.STREET}
                id="street"
                placeholder="Rua"
                error={errors.street}
                {...register('street')}
              />
              <InputText
                gridArea={gridAreas.NUMBER}
                id="number"
                placeholder="Número"
                error={errors.number}
                {...register('number')}
              />
              <InputText
                gridArea={gridAreas.COMPLEMENT}
                id="complement"
                placeholder="Complemento"
                optional
                error={errors.complement}
                {...register('complement')}
              />
              <InputText
                gridArea={gridAreas.NEIGHBORHOOD}
                id="neighborhood"
                placeholder="Bairro"
                error={errors.neighborhood}
                {...register('neighborhood')}
              />
              <InputText
                gridArea={gridAreas.CITY}
                id="city"
                placeholder="Cidade"
                error={errors.city}
                {...register('city')}
              />
              <InputText
                gridArea={gridAreas.STATE}
                id="state"
                placeholder="UF"
                error={errors.state}
                {...register('state')}
              />
            </AddressFormGrid>
          </DeliveryDetails>

          <PaymentMethod>
            <Heading>
              <MdOutlineAttachMoney size={22} color={theme.colors.secondary} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </Heading>

            <PaymentOptionsGrid>
              <PaymentOption
                isSelected={selectedPaymentMethod === 'credit'}
                value={'credit'}
                {...register('paymentMethod')}
              >
                <PiCreditCard />
                <span>Cartão de Crédito</span>
              </PaymentOption>
              <PaymentOption
                isSelected={selectedPaymentMethod === 'debit'}
                value={'debit'}
                {...register('paymentMethod')}
              >
                <PiBank />
                <span>Cartão de Débito</span>
              </PaymentOption>
              <PaymentOption
                isSelected={selectedPaymentMethod === 'money'}
                value={'money'}
                {...register('paymentMethod')}
              >
                <PiCurrencyDollar />
                <span>Dinheiro</span>
              </PaymentOption>
            </PaymentOptionsGrid>

            {errors.paymentMethod?.message && (
              <p style={{ color: theme.colors.secondary }}>
                {errors.paymentMethod.message}
              </p>
            )}
          </PaymentMethod>
        </Column>

        <Column>
          <h2>Cafés selecionados</h2>
          <OrderReview>
            {products.map((product) => {
              return <CardMini key={product.id} product={product} />
            })}
            <button type="submit" disabled={!isValid}>
              Confirmar Pedido
            </button>
          </OrderReview>
        </Column>
      </Form>
    </CheckoutContainer>
  )
}
