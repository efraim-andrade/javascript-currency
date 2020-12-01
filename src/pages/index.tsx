import React from 'react'

import { Header, Information, TryIt } from '~/components'

import * as S from './styles'

const pages: React.FC = () => {
  return (
    <S.Container>
      <Header />

      <div className="content md:flex justify-between align-items-center w-full">
        <Information />

        <TryIt />
      </div>
    </S.Container>
  )
}

export default pages
