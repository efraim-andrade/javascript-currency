import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      font-family: ${theme.font.family};
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

    html {
      font-size: 62.5%;
    }

    body {
      background: ${theme.colors.mainBg};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
