import React from 'react'

import * as S from './styles'

const Information = () => {
  return (
    <S.Container>
      <h1>
        Why my <strong>JS</strong> calculations do not work properly ?
      </h1>

      <p className="description">
        The simplest <a href="">answer</a> is that internally the computers use
        a binary floating point system and this doesn&apos;t represent a rounded
        number like 0.1, 0.2... So the calculations lose precision. For them to
        work properly, it is necessary to use a function to format those float
        numbers or use a <a href="">library</a>.
      </p>

      <span className="try-it">
        Try it on the calculator: <S.ArrowIcon />
      </span>
    </S.Container>
  )
}

export default Information
