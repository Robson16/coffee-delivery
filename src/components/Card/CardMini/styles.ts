import styled from 'styled-components'

export const CardMiniContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-areas:
    'IMAGE INFOS'
    'IMAGE ACTIONS';
  grid-template-columns: 70px auto;
  grid-gap: 0.5rem 1rem;
  align-items: start;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors['base-card']};
`

export const ProductImage = styled.img`
  grid-area: IMAGE;
  max-width: 64px;
  max-height: 64px;
`

export const Infos = styled.div`
  grid-area: INFOS;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-family: ${(props) => props.theme.typography.fontFamily.baloo2};
  font-size: ${(props) => props.theme.typography.text['text-m'].size};
  line-height: ${(props) => props.theme.typography.text['text-m'].lineHeight};
  font-weight: 400;
  color: ${(props) => props.theme.colors['base-subtitle']};
  text-align: center;
`

export const Actions = styled.div`
  grid-area: ACTIONS;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Price = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.2rem;
  color: ${(props) => props.theme.colors['base-text']};

  span {
    font-size: ${(props) => props.theme.typography.text['text-m'].size};
    line-height: ${(props) => props.theme.typography.text['text-m'].lineHeight};
    font-weight: 700;
  }
`
