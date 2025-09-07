import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['purple']}
  }

  body {
    background: ${(props) => props.theme.colors['background']};
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${(props) => props.theme.typography.fontFamily.roboto};
    font-weight: 400;
    font-size: ${(props) => props.theme.typography.text['text-m'].size};
    line-height: ${(props) => props.theme.typography.text['text-m'].lineHeight};
  }
`
