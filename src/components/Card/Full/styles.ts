import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem 1.25rem 1.5rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme.colors['base-card']};
`

export const ProductImage = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`

export const Infos = styled.div`
  min-height: 9rem;
`

export const Tags = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  span {
    padding: 0.25rem 0.5rem;
    font-size: ${(props) => props.theme.typography.tag.size};
    line-height: ${(props) => props.theme.typography.tag.lineHeight};
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 100px;
    color: ${(props) => props.theme.colors['primary-dark']};
    background-color: ${(props) => props.theme.colors['primary-light']};
  }
`

export const Title = styled.h3`
  margin-top: 1rem;
  font-family: ${(props) => props.theme.typography.fontFamily.baloo2};
  font-size: ${(props) => props.theme.typography.title['title-s'].size};
  line-height: ${(props) => props.theme.typography.title['title-s'].lineHeight};
  font-weight: 700;
  color: ${(props) => props.theme.colors['base-subtitle']};
  text-align: center;
`

export const Description = styled.p`
  margin-top: 0.5rem;
  font-size: ${(props) => props.theme.typography.text['text-s'].size};
  line-height: ${(props) => props.theme.typography.text['text-s'].lineHeight};
  color: ${(props) => props.theme.colors['base-label']};
  text-align: center;
`

export const Actions = styled.div`
  margin-top: 2rem;
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
    &:first-child {
      font-size: ${(props) => props.theme.typography.text['text-m'].size};
      line-height: ${(props) =>
        props.theme.typography.text['text-m'].lineHeight};
    }

    &:last-child {
      font-size: ${(props) => props.theme.typography.title['title-m'].size};
      line-height: ${(props) =>
        props.theme.typography.title['title-m'].lineHeight};
      font-weight: 700;
    }
  }
`

export const Order = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 0.5rem;
`

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 0.5rem;
  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme.colors['white']};
  background-color: ${(props) => props.theme.colors['secondary-dark']};
  transition: all 0.2s;

  &:disabled {
    background-color: ${(props) => props.theme.colors['primary-dark']};

    &:hover,
    &:active,
    &:focus {
      background-color: ${(props) => props.theme.colors['primary']};
      cursor: not-allowed;
    }
  }

  &:hover,
  &:active,
  &:focus {
    background-color: ${(props) => props.theme.colors['secondary']};
    cursor: pointer;
  }
`
