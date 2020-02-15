import styled from 'styled-components'

export const SSearchBar = styled.div`
  position: relative;

  > input {
    color: rgba(37, 83, 179, 0.68);

    font-size: 1.8rem;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 1px;
      width: 100%;
      background-color: #f00;
    }
  }
`
