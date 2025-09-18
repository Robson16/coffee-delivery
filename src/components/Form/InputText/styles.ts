import styled from 'styled-components'

interface GridInputProps {
  gridArea?: string
}

export const InputWrapper = styled.div<GridInputProps>`
  ${(props) => props.gridArea && `grid-area: ${props.gridArea};`}
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: ${(props) => props.theme.typography.text['text-s'].size};
  line-height: ${(props) => props.theme.typography.text['text-s'].lineHeight};
`

export const InputContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: ${(props) => props.theme.colors['base-input']};
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  border-radius: 4px;

  input {
    width: 100%;
    color: ${(props) => props.theme.colors['base-text']};
    background-color: transparent;
    border: 0;
    outline: 0;
    box-shadow: none;

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }

  span {
    font-style: italic;
    color: ${(props) => props.theme.colors['base-label']};
  }

  &[data-state='focused'] {
    border-color: ${(props) => props.theme.colors['primary-dark']};
  }

  &[data-state='blurred'] {
    border-color: ${(props) => props.theme.colors['base-button']};
  }
`

export const InputMessage = styled.p`
  color: ${(props) => props.theme.colors['secondary-dark']};
`
