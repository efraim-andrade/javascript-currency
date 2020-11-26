import React from 'react'

import { Header, Information } from '~/components'

import * as S from './styles'

const pages: React.FC = () => {
  return (
    <S.Container>
      <Header />

      <Information />
    </S.Container>
  )
}

export default pages
