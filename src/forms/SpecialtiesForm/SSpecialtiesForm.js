import styled from 'styled-components'

export const SSpecialtiesForm = styled.form`
  padding: 2rem 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem 2rem;

  > p {
    margin-top: 2rem;
    color: rgba(37, 83, 179, 0.68);
  }

  > label {
    margin-right: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    span {
      &:first-child {
        > span:first-child {
          > svg {
            width: 3.2rem;
            height: 3.2rem;
            > path {
              fill: #2553b3;
            }
          }
        }
      }

      &:last-child {
        color: rgba(37, 83, 179, 0.68);
        display: inline-flex;
        text-align: center;
        font-size: 2rem;
        max-width: 10rem;
      }
    }
  }
`
