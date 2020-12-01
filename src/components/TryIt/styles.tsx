import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 720px) {
    width: 100%;
    max-width: 74.6rem;
  }
`
