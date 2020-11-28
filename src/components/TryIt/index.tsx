import React from 'react'

import { Input } from '~/components'

import * as S from './styles'

const TryIt = () => {
  return (
    <S.Container>
      <Input label="insira um calculo" placeholder="ex. 5.59 - 4" />

      <span className="mt-2 mb-2 text-4xl leading-none text-primary">=</span>

      <div className="w-full flex items-start justify-between">
        <Input
          disabled
          placeholder="0"
          labelPosition="bottom"
          label="Javascript puro"
          className="bg-secondary bg-opacity-20 placeholder-white border-mainBg"
        />

        <Input
          disabled
          placeholder="0"
          labelPosition="bottom"
          className="text-black bg-primary placeholder-black border-mainBg"
          label={
            <span className="text-primary">
              Com biblioteca{' '}
              <small className="text-3 opacity-30">(currency.js)</small>
            </span>
          }
        />
      </div>
    </S.Container>
  )
}

export default TryIt
