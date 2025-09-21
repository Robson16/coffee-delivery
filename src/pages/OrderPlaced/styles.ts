import styled from 'styled-components'

export const OrderPlacedContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  margin: 3.4rem auto;
  width: 100%;
  max-width: ${(props) => props.theme.container.maxWidth};
  padding: ${(props) => props.theme.container.padding};

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-end;
  }

  img {
    width: 100%;
    max-width: 32.9rem;
  }
`

export const Column = styled.div`
  flex: 1;
`

export const Heading = styled.hgroup`
  h1 {
    font-family: ${(props) => props.theme.typography.fontFamily.baloo2};
    font-size: ${(props) => props.theme.typography.title['title-l'].size};
    line-height: ${(props) =>
      props.theme.typography.title['title-l'].lineHeight};
    font-weight: 700;
    color: ${(props) => props.theme.colors['primary-dark']};
  }

  p {
    font-size: ${(props) => props.theme.typography.text['text-m'].size};
    line-height: ${(props) => props.theme.typography.text['text-m'].lineHeight};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const DeliverySummary = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.5rem;
  padding: 2.5rem;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    padding: 2px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors['primary']},
      ${(props) => props.theme.colors['secondary-dark']}
    );
    -webkit-mask:
      linear-gradient(${(props) => props.theme.colors['white']} 0 0) content-box,
      linear-gradient(${(props) => props.theme.colors['white']} 0 0);
    mask:
      linear-gradient(${(props) => props.theme.colors['white']} 0 0) content-box,
      linear-gradient(${(props) => props.theme.colors['white']} 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  address {
    font-size: ${(props) => props.theme.typography.text['text-m'].size};
    line-height: ${(props) => props.theme.typography.text['text-m'].lineHeight};
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const IconInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    padding: 0.5rem;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
  }
`
