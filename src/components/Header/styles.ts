import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: ${(props) => props.theme.container.maxWidth};
  padding: ${(props) => props.theme.container.padding};
  margin: ${(props) => props.theme.container.margin};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;

  nav {
    display: flex;
    gap: 0.5rem;
  }
`

export const Location = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-height: 2.375rem; // 38px
  padding: 0.625rem 0.5rem; // 10px 8px
  font-size: ${(props) => props.theme.typography.text['text-s'].size};
  color: ${(props) => props.theme.colors['purple-dark']};
  background-color: ${(props) => props.theme.colors['purple-light']};
  border-radius: 6px;

  svg {
    font-size: 1.125rem; // 18px
    fill: ${(props) => props.theme.colors['purple']};
  }
`
