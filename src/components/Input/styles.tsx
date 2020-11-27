import styled, { css } from 'styled-components'

import { InputProps } from './index'

const modifiers = {
  top: () => css``
}

type ContainerProps = Pick<InputProps, 'labelPosition'>

export const Container = styled.div<ContainerProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 0.8rem;

      line-height: 1;
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
      color: ${theme.colors.secondary};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    height: 4.2rem;
    min-width: 15rem;
    border-radius: 0.8rem;
    border: 0.1rem solid ${theme.colors.secondary};

    line-height: 1;
    transition: 0.3s;
    font-weight: 500;
    font-size: 1.6rem;
    text-align: center;
    background: transparent;
    color: ${theme.colors.secondary};

    &::placeholder {
      color: rgba(232, 229, 209, 0.4);
    }

    &:focus {
      border: 0.1rem solid ${theme.colors.primary};

      outline: none;
    }
  `}
`
