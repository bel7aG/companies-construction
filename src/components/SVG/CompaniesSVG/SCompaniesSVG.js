import styled from 'styled-components'

export const SCompaniesSVG = styled.svg`
  min-width: 22rem;
  width: 25vw;

  > g {
    &:first-child {
      > rect {
        &:first-child,
        &:nth-child(3),
        &:nth-child(5) {
          fill: #2553b3;
        }

        &:nth-child(2),
        &:nth-child(4),
        &:last-child {
          fill: #3f6dcd;
        }
      }
    }

    &:last-child {
      > path {
        &:first-child,
        &:nth-child(2) {
          fill: #3f6dcd;
        }

        &:nth-child(3),
        &:last-child {
          fill: #2553b3;
        }
      }
    }
  }
`
