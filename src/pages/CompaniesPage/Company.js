import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Company = props => {
  const { name, logo, city, specialties } = props

  const specialtiesList = specialties.map(({ id, name }) => (
    <li key={id}>
      <span>{name}</span>
    </li>
  ))

  return (
    <SCompany logo={logo}>
      <div>
        <div />
        <h1>{name}</h1>
        <p>({city})</p>
      </div>
      <div>
        <ul>{specialtiesList}</ul>
      </div>
    </SCompany>
  )
}

const SCompany = styled.div`
  > div {
    &:first-child {
      margin-bottom: 6rem;

      > div:first-child {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        margin: 0 auto;
        background-position: center;
        background-size: cover;
        background-image: url(${({ logo }) => logo});
      }

      > h1 {
        color: #2553b3;
        font-size: 2.4rem;
        margin-top: 1rem;
        text-align: center;
      }
      > p {
        letter-spacing: 2px;
        color: rgba(37, 83, 179, 0.68);
        text-align: center;
      }
    }

    &:nth-child(2) {
      > ul {
        max-height: 12rem;
        overflow-y: auto;
        max-width: calc(100% - 7.5rem);

        display: flex;
        &::-webkit-scrollbar-track {
          background-color: rgba(37, 83, 179, 0.18);
          border-radius: 8px;
        }

        &::-webkit-scrollbar {
          height: 2px;
          background-color: rgba(37, 83, 179, 0.38);
          border-radius: 8px;
        }

        &::-webkit-scrollbar-thumb {
          background-color: #2553b3;
          box-shadow: 0 0 1rem #2553b3;
          border-radius: 8px;
        }

        &:hover {
          &::-webkit-scrollbar {
            height: 3px;
          }
        }

        > li {
          margin-bottom: 1rem;
          padding: 5px 2px;
          display: inline-flex;
          margin-right: 2rem;
          min-width: 7rem;
          border: 1px solid rgba(37, 83, 179, 0.68);
          border-radius: 4px;
          transition: background-color 0.3s;

          > span {
            margin: 0 auto;
            margin-top: 3px;
            color: rgba(37, 83, 179, 0.68);
            text-align: center;
            transition: color 0.2s;
          }

          &:hover {
            background-color: rgba(37, 83, 179, 0.68);

            > span {
              color: #fff;
            }
          }
        }
      }
    }
  }
`

Company.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  specialties: PropTypes.array.isRequired,
}

export default Company
