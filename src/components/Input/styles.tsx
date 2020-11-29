import styled, { css } from 'styled-components'

import { InputProps } from './index'

const modifiers = {
  top: () => css`
    flex-direction: column;

    label {
      margin-bottom: 0.8rem;
    }
  `,
  bottom: () => css`
    flex-direction: column-reverse;

    label {
      margin-top: 0.8rem;
    }
  `
}

type ContainerProps = Pick<InputProps, 'labelPosition' | 'maxWidth'>

export const Container = styled.div<ContainerProps>`
  ${({ theme, labelPosition, maxWidth }) => css`
    width: 100%;
    max-width: ${maxWidth};

    display: flex;

    label {
      line-height: 1;
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
      word-wrap: break-word;
      color: ${theme.colors.secondary};
    }

    ${!!labelPosition && modifiers[labelPosition]}
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    height: 4.2rem;
    border-radius: 0.8rem;

    line-height: 1;
    transition: 0.3s;
    font-weight: 500;
    font-size: 1.6rem;
    text-align: center;

    &:focus {
      border: 0.1rem solid ${theme.colors.primary};

      outline: none;
    }
  `}
`
