import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Logo = styled.div`
  margin-bottom: 3.2rem;

  display: flex;
  align-items: center;
`

export const Info = styled.div`
  ${({ theme }) => css`
    margin-left: 12px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    small {
      margin-bottom: 0.4rem;

      display: block;

      opacity: 0.4;
      font-size: 9px;
      line-height: 1;
      font-weight: 700;
      color: ${theme.colors.secondary};
      font-family: Montserrat, sans-serif;
    }

    strong {
      line-height: 1;
      color: ${theme.colors.primary};
      font-family: Montserrat, sans-serif;
      font-size: ${theme.font.sizes.large};
    }
  `}
`
