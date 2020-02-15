import styled, { keyframes } from 'styled-components'

const slideAnimationIn = keyframes`
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0%);
  }
`

export const SModal = styled.div`
  z-index: 15;
  display: flex;
  justify-content: flex-end;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.66);

  animation: ${({ show }) => (show ? 'fadeIn' : 'fadeOut')} 0.4s;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: visibility ${({ show }) => (show ? '0.4s 0s' : '0s 0.4s')};

  > div {
    position: relative;
    transform: translateX(100%);
    animation: ${({ show }) => (show ? slideAnimationIn : 'fadeOut')} 0.4s
      ${({ show }) => (show ? `0.3s` : `0s`)} forwards ease-in-out;
    height: 100vh;
    border-left: 1px solid #dddddd;
    &,
    > div {
      max-width: 55rem;
      width: 100%;
      background-color: #fdfdfd;
    }

    > div {
      &:nth-child(2) {
        max-height: calc(100vh - 11.3rem);
        height: 100%;
        overflow-y: auto;
      }
      transform: translateY(6%);

      padding: 1.5rem 4rem;

      > div {
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        &:not(:last-child) {
          border-bottom: 1px solid #eeeeee;
        }

        display: flex;
        justify-content: space-between;

        > h1 {
          line-height: 4rem;
          font-size: 2rem;
          color: #777788;
        }

        > button {
          transition: transform 0.21s ease-in-out;
          > svg {
            fill: #2553b3;
            height: 4rem;
            width: 4rem;
          }

          &:hover {
            transform: rotate(90deg);
          }
        }
      }
    }
  }
`
