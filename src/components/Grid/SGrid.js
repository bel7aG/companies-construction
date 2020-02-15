import styled from 'styled-components'

export const SGrid = styled.div`
  display: grid;
  align-items: flex-start;
  align-items: flex-start;
  grid-gap: 5rem 2rem;

  > * {
    height: 32rem;
    border: 1px solid rgba(37, 83, 179, 0.18);
    background-color: #fff;
    border-radius: 4px;
    padding: 2rem 1rem;
  }

  @media screen and (min-width: 768px) {
    justify-content: space-evenly;
  }

  @media screen and (max-width: 768px) {
    padding: 0 6rem 0 1rem;
    justify-content: center;
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(27rem, 36rem));
    padding: 0;
  }

  @media screen and (max-width: 1200px) and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 6rem 0 2rem;
  }
`
