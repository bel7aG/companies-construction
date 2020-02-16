import styled from 'styled-components'

export const SFilterSVG = styled.svg`
  height: ${({ size }) => size || '4.4rem'};
  width: ${({ size }) => size || '4.4rem'};
  fill: ${({ fill }) => fill || 'none'};

  > g {
    > path:last-child {
      stroke: #2553b3;
      stroke-dasharray: 2.18rem;
      transition: all 0.93s ease-out;
    }
  }

  &:hover {
    > g > path:last-child {
      stroke-dasharray: 5rem;
    }
  }
`
