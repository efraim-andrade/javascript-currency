import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import { DownArrowCircle } from '@styled-icons/boxicons-solid'

export const Container = styled.div`
  ${({ theme }) => css`
    margin-bottom: 3.2rem;

    h1 {
      margin-bottom: 1.6rem;

      font-size: 3.2rem;
      font-weight: 700;
      line-height: 4rem;
      color: ${theme.colors.secondary};

      @media screen and (min-width: 720px) {
        font-size: 4rem;
        line-height: 5rem;
      }

      strong {
        color: ${theme.colors.primary};
      }
    }

    .description {
      margin-bottom: 2.4rem;

      opacity: 0.8;
      line-height: 1.5;
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.small};

      a {
        text-decoration: none;
        color: ${theme.colors.primary};

        &:hover {
          text-decoration: underline;
          color: ${lighten(0.1, theme.colors.primary)};
        }
      }
    }

    .try-it {
      line-height: 1;
      font-weight: 700;
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export const ArrowIcon = styled(DownArrowCircle).attrs(({ theme }) => ({
  height: '32',
  color: theme.colors.primary
}))`
  margin-left: 0.8rem;
`
