import React from 'react'

import { Header, Information, TryIt } from '~/components'

import * as S from './styles'

const pages: React.FC = () => {
  return (
    <S.Container>
      <Header />

      <Information />

      <TryIt />
    </S.Container>
  )
}

export default pages
