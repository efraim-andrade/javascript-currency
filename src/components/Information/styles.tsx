import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
  ${({ theme }) => css`
    h1 {
      margin-bottom: 16px;

      font-size: 3.2rem;
      font-weight: 700;
      line-height: 4rem;
      color: ${theme.colors.secondary};

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
