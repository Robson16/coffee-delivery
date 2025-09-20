import styled from 'styled-components'

export const gridAreas = {
  CEP: 'CEP',
  STREET: 'STREET',
  NUMBER: 'NUMBER',
  COMPLEMENT: 'COMPLEMENT',
  NEIGHBORHOOD: 'NEIGHBORHOOD',
  CITY: 'CITY',
  STATE: 'STATE',
} as const

export const CheckoutContainer = styled.main`
  margin: 3.4rem auto;
  width: 100%;
  max-width: ${(props) => props.theme.container.maxWidth};
  padding: ${(props) => props.theme.container.padding};

  h2 {
    font-size: ${(props) => props.theme.typography.title['title-xs'].size};
    line-height: ${(props) =>
      props.theme.typography.title['title-xs'].lineHeight};
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`

export const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.75rem;

  @media (min-width: 992px) {
    flex-basis: 100%;
  }

  &:first-child {
    flex-basis: 60%;
  }

  &:last-child {
    flex-basis: 40%;
  }
`

export const Heading = styled.hgroup`
  display: flex;
  gap: 0.5rem;

  h3 {
    font-size: ${(props) => props.theme.typography.text['text-m'].size};
    line-height: ${(props) => props.theme.typography.text['text-m'].lineHeight};
  }

  p {
    font-size: ${(props) => props.theme.typography.text['text-s'].size};
    line-height: ${(props) => props.theme.typography.text['text-s'].lineHeight};
  }
`

const SectionBase = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;

  @media (min-width: 992px) {
    padding: 2.5rem;
  }
`

export const DeliveryDetails = styled(SectionBase)``

export const AddressFormGrid = styled.div`
  display: grid;
  grid-template-areas:
    '${gridAreas.CEP} ${gridAreas.CEP}'
    '${gridAreas.STREET} ${gridAreas.STREET}'
    '${gridAreas.NEIGHBORHOOD} ${gridAreas.NUMBER}'
    '${gridAreas.COMPLEMENT} ${gridAreas.COMPLEMENT}'
    '${gridAreas.CITY} ${gridAreas.STATE}';
  grid-template-columns: minmax(200px, 1fr) minmax(50px, 1fr);
  grid-gap: 1rem;

  @media (min-width: 992px) {
    grid-template-areas:
      '${gridAreas.CEP} . .'
      '${gridAreas.STREET} ${gridAreas.STREET} ${gridAreas.STREET}'
      '${gridAreas.NUMBER} ${gridAreas.COMPLEMENT} ${gridAreas.COMPLEMENT}'
      '${gridAreas.NEIGHBORHOOD} ${gridAreas.CITY} ${gridAreas.STATE}';
    grid-template-columns: minmax(200px, 1fr) 1fr minmax(60px, 1fr);
  }
`

export const PaymentMethod = styled(SectionBase)``

export const PaymentOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const OrderReview = styled(SectionBase)`
  border-radius: 6px 36px 6px 36px;

  & > p {
    text-align: center;
    font-style: italic;
    font-size: ${(props) => props.theme.typography.text['text-m'].size};
    line-height: ${(props) => props.theme.typography.text['text-m'].lineHeight};
    color: ${(props) => props.theme.colors['base-text']};
  }

  a,
  button[type='submit'] {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.white};
    padding: 1rem;
    border: none;
    border-radius: 6px;
    transition: background-color 0.2s;
    font-size: ${(props) => props.theme.typography.button['button-g'].size};
    line-height: ${(props) =>
      props.theme.typography.button['button-g'].lineHeight};
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
  }

  a {
    background-color: ${(props) => props.theme.colors.secondary};
    text-decoration: none;

    &:hover {
      background-color: ${(props) => props.theme.colors['secondary-dark']};
    }
  }

  button[type='submit'] {
    background-color: ${(props) => props.theme.colors.primary};

    &:disabled {
      color: ${(props) => props.theme.colors['base-label']};
      background-color: ${(props) => props.theme.colors['base-button']};
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme.colors['primary-dark']};
    }
  }
`

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & > div:not(:last-child) {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
  }
`

export const CartSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p {
    display: flex;
    justify-content: space-between;
    font-size: ${(props) => props.theme.typography.text['text-m'].size};
    line-height: ${(props) => props.theme.typography.text['text-m'].lineHeight};

    &:last-child {
      font-size: ${(props) => props.theme.typography.text['text-l'].size};
      line-height: ${(props) =>
        props.theme.typography.text['text-l'].lineHeight};
      font-weight: 700;
      color: ${(props) => props.theme.colors['base-subtitle']};
    }
  }
`
