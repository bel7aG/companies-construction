import styled from 'styled-components'

export const SFilterSVG = styled.svg`
  height: ${({ size }) => size || '4.4rem'};
  width: ${({ size }) => size || '4.4rem'};
  fill: transparent;
  > g {
    > path:last-child {
      stroke: #2553b3;
    }
  }
`
