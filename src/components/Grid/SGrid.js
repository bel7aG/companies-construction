import styled, { keyframes } from 'styled-components'

const GridItemAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(.89);
  }


  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const SGrid = styled.div`
  display: grid;
  align-items: flex-start;
  align-items: flex-start;
  grid-gap: 5rem 2rem;

  > * {
    opacity: 0.91;
    animation: ${GridItemAnimation} 0.89s ease;
    min-height: 27rem;
    border: 1px solid rgba(37, 83, 179, 0.18);
    border-radius: 4px;
    padding: 2rem 1rem;
    position: relative;
    overflow: hidden;
    transition: opacity 0.2s;

    &::before,
    &::after {
      content: '';
      position: absolute;
    }

    &::before {
      bottom: -7.5rem;
      right: -7.5rem;

      width: 15rem;
      height: 15rem;
      transform: rotate(-45deg);
      background-image: linear-gradient(
        to right bottom,
        #2553b3,
        #1e459d,
        #163888,
        #0c2c74,
        #022060
      );
    }

    &::after {
      bottom: 3.75rem;
      right: 3.75rem;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      background-color: #fff;
    }

    &:hover {
      border: 1px solid rgba(37, 83, 179, 0.28);
      opacity: 1;
    }
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
    grid-template-columns: repeat(auto-fit, minmax(26rem, 36rem));
    padding: 0 2rem;
  }

  @media screen and (max-width: 1200px) and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(26rem, 36rem));
    padding: 0 6rem 0 2rem;
  }
`
