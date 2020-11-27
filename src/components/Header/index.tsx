import React from 'react'

import { Logo } from '~/components'

import * as S from './styles'

const Header = () => {
  return (
    <S.Container>
      <S.Logo>
        <Logo />

        <S.Info>
          <small>Javascript</small>

          <strong>Currency</strong>
        </S.Info>
      </S.Logo>
    </S.Container>
  )
}

export default Header
