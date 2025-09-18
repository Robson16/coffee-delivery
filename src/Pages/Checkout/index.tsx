import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import zod from 'zod'
import { InputText } from '../../components/Form/InputText'
import {
  CheckoutContainer,
  DeliveryDetails,
  gridAreas,
  OrderReview,
  PaymentMethod,
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
})

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
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

  const { register, handleSubmit, formState, reset } = checkoutForm

  const { isValid, errors } = formState

  function handleCreateNewOrder(data: CheckoutFormData) {
    console.log(data)
    reset()
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)}>
        <div>
          <h2>Complete seu pedido</h2>
          <DeliveryDetails>
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
          </DeliveryDetails>
          <PaymentMethod></PaymentMethod>
        </div>

        <div>
          <h2>Cafés selecionados</h2>
          <OrderReview>
            <button type="submit" disabled={!isValid}>
              Confirmar Pedido
            </button>
          </OrderReview>
        </div>
      </form>
    </CheckoutContainer>
  )
}
