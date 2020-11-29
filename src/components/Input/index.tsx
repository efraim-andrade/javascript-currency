import React, { useMemo } from 'react'

import * as S from './styles'

export type InputProps = {
  maxWidth?: string
  disabled?: boolean
  className?: string
  placeholder?: string
  value?: string | number
  label: string | React.ReactNode
  labelPosition?: 'top' | 'bottom'
  onChange?(value: string | number): void
}

const Input = ({
  label,
  disabled,
  className,
  placeholder,
  maxWidth = '16rem',
  labelPosition = 'top',
  onChange = () => {},
  value = ''
}: InputProps) => {
  const selectedClasses = useMemo(() => {
    if (!className)
      return 'bg-transparent text-secondary placeholder-whiteOpaque border-1 border-solid  border-secondary'

    return `border-1 border-solid  border-secondary ${className}`
  }, [className])

  return (
    <S.Container
      maxWidth={maxWidth}
      aria-label="field-container"
      labelPosition={labelPosition}
    >
      <label>{label}</label>

      <S.Input
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        className={selectedClasses}
        onChange={(event) => !!onChange && onChange(event.target.value || '')}
      />
    </S.Container>
  )
}

export default Input
