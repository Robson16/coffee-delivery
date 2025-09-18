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
  margin: 3.4rem auto 0;
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

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 992px) {
      flex-direction: row;
    }
  }

  form > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.75rem;

    @media (min-width: 992px) {
      flex-basis: 100%;
    }
  }

  form > div:first-child {
    flex-basis: 60%;
  }

  form > div:last-child {
    flex-basis: 40%;
  }
`

const SectionBase = styled.section`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;

  @media (min-width: 992px) {
    padding: 2.5rem;
  }
`

export const DeliveryDetails = styled(SectionBase)`
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

export const OrderReview = styled(SectionBase)`
  border-radius: 6px 36px 6px 36px;
`
