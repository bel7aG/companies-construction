import styled from 'styled-components'

export const SCover = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  overflow-y: hidden;
  > div:first-child {
    height: 100vh;
    > div:first-child {
    }

    > picture {
      > img {
        height: 100vh;
      }
    }
  }
`
