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
  height: 6.9rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
`
