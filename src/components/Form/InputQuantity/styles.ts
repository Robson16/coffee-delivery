import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['base-button']};

  span {
    padding: 0.25rem;
    font-size: ${(props) => props.theme.typography.text['text-m'].size};
    line-height: ${(props) => props.theme.typography.text['text-m'].lineHeight};
    color: ${(props) => props.theme.colors['base-title']};
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 0.5rem;
  border: 0;
  background-color: transparent;
  transition: all 0.2s;

  &:hover,
  &:active,
  &:focus {
    color: ${(props) => props.theme.colors['secondary']};
    cursor: pointer;
  }
`
