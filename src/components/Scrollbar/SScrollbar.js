import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars'

export const SScrollbar = styled(Scrollbars)`
  display: block;

  height: 100vh !important;

  > div {
    &:nth-child(2) {
      display: none;
    }
    z-index: 5;
    &:first-child {
      min-height: 100vh;
      padding: 8rem 3rem;

      @media (max-width: 1000px) {
        padding: 1rem 1rem;
      }
    }
    &:last-child {
      width: 2px !important;
      background-color: #ddd;
      right: 2.62rem !important;
      margin: auto 0;
      max-height: 71%;
      min-height: 20rem;
      > div {
        background-color: #2553b3 !important;
        width: 2px !important;
        perspective: 90000;
        border-radius: 0 !important;
        transition: all 0.09s ease;

        &:hover,
        &:focus,
        &:active {
          width: 5px !important;
          margin: 0 0 0 -1.51px !important;
        }
      }
    }
  }
`
