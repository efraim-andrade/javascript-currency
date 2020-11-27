import React from 'react'

import * as S from './styles'

export type InputProps = {
  label: string
  labelPosition?: 'top' | 'bottom'
}

const Input = ({ label, labelPosition = 'top' }: InputProps) => {
  return (
    <S.Container labelPosition={labelPosition} aria-label="field">
      <label>{label}</label>

      <S.Input />
    </S.Container>
  )
}

export default Input
