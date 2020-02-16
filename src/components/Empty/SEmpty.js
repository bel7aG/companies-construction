import styled from 'styled-components'

export const SEmpty = styled.div`
  animation: fadeIn 0.6s ease;
  position: fixed;
  top: 6.9rem;
  left: 0;
  height: calc(100% - 6.9rem);
  width: 100%;
  &,
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div {
    flex-direction: column;
    > p {
      letter-spacing: 3px;
      word-spacing: 5px;
      color: #2553b3;
      font-size: 2.3rem;
      margin-top: 4rem;
      text-align: center;
    }
  }
`
