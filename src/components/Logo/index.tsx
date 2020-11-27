import React from 'react'

import * as S from './styles'

const Logo = () => {
  return (
    <S.Container>
      <svg
        width="37"
        height="37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="js-currency-logo"
      >
        <rect width="36.6" height="36.6" rx="6" fill="#E8D44C" />
        <path
          d="M20.5 22h2v6.6c0 .6-.2 1.1-.4 1.6-.3.5-.7.8-1.2 1-.5.3-1 .5-1.6.5-1 0-1.9-.3-2.4-.8-.6-.5-.9-1.3-.9-2.2h2c0 .5.1.8.3 1 .2.3.5.4 1 .4.3 0 .6-.2.9-.4.2-.3.3-.6.3-1.1v-6.7z"
          fill="#31322F"
        />
        <path
          d="M28.9 29c0-.4-.1-.6-.3-.9l-1-.5-1.3-.6-.9-.6-.6-.8-.2-1.1c0-.8.3-1.4.7-1.9a3 3 0 012-.8v-1.4h1v1.4c.8.1 1.4.5 1.8 1 .4.5.7 1.2.7 2.1h-2c0-.5 0-1-.3-1.2a1 1 0 00-.8-.4c-.4 0-.7.1-.9.3-.2.2-.3.5-.3.9 0 .3.1.6.3.8l1 .6 1.4.6.8.6c.3.3.5.5.6.8l.2 1c0 .8-.3 1.4-.7 2a3 3 0 01-2 .7V33h-1v-1.3c-1 0-1.6-.4-2.1-1-.5-.5-.7-1.2-.7-2h1.9c0 .4 0 .8.3 1.1.3.3.6.4 1.1.4.4 0 .7 0 1-.3.1-.2.3-.4.3-.8z"
          fill="#5F962A"
        />
      </svg>
    </S.Container>
  )
}

export default Logo
