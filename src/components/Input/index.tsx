import React, { useMemo } from 'react'

import * as S from './styles'

export type InputProps = {
  disabled?: boolean
  className?: string
  placeholder?: string
  label: string | React.ReactNode
  labelPosition?: 'top' | 'bottom'
}

const Input = ({
  label,
  disabled,
  className,
  placeholder,
  labelPosition = 'top'
}: InputProps) => {
  const selectedClasses = useMemo(() => {
    if (!className)
      return 'bg-transparent text-secondary placeholder-whiteOpaque border-1 border-solid  border-secondary'

    return `border-1 border-solid  border-secondary ${className}`
  }, [className])

  return (
    <S.Container labelPosition={labelPosition} aria-label="field-container">
      <label>{label}</label>

      <S.Input
        placeholder={placeholder}
        disabled={disabled}
        className={selectedClasses}
      />
    </S.Container>
  )
}

export default Input
