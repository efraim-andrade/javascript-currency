import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import '~/styles/index.css'
import theme from '~/styles/theme'
import GlobalStyles from '~/styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Javascript - Currency</title>

        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
