import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    width: 100%;
    margin: 0 auto;
    max-width: 1194px;
    padding-top: 40px;

    @media screen and (max-width: 720px) {
      padding: 40px 16px;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      background: ${theme.colors.mainBg};
    }
  `}
`

export default GlobalStyles
