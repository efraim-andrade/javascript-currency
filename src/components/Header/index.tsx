import React from 'react'

import JSCurrencyIcon from '~/assets/js-currency-icon.svg'

import * as S from './styles'

const Header = () => {
  return (
    <S.Container>
      <S.Logo>
        <JSCurrencyIcon />

        <S.Info>
          <small>Javascript</small>

          <strong>Currency</strong>
        </S.Info>
      </S.Logo>
    </S.Container>
  )
}

export default Header
