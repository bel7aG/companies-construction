import styled, { keyframes } from 'styled-components'

const HeaderIn = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`

export const SHeader = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  animation: ${HeaderIn} 0.46s 1s ease forwards;

  width: 100vw;
  background-color: #fff;
  border-bottom: 1px solid #ddd;

  &,
  > div {
    height: 6.9rem;
  }

  > div {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      &:first-child {
        > a {
          color: #2553b3;
          font-size: 2.6rem !important;
        }
      }
      > a,
      > div > input {
        letter-spacing: 2px;
      }
    }
  }
`
