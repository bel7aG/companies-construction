import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Company = props => {
  const { name = '', logo = '', city = '', specialties = [] } = props

  const specialtiesList = specialties.map(({ id, name, description }) => (
    <SpecialtyItem key={id} description={description}>
      <span>{name}</span>
    </SpecialtyItem>
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
        width: 5.5rem;
        height: 5.5rem;
        margin: 0 auto;
        overflow: hidden;
        border-radius: 4px;
        position: relative;
        background-repeat: no-repeat;
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
      position: relative;
      > ul {
        overflow-x: auto;
        max-width: calc(100% - 7rem);
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
          padding: 5px 1rem;
          display: inline-flex;
          margin-right: 2rem;
          border: 1px solid rgba(37, 83, 179, 0.68);
          border-radius: 4px;
          transition: background-color 0.3s;

          > span {
            margin: 0 auto;
            margin-top: 3px;
            color: rgba(37, 83, 179, 0.68);
            white-space: nowrap;
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

const SpecialtyItem = styled.li`
  &::before {
    content: ${({ description }) => "'" + description + "'"};
    position: absolute;
    top: -5.2rem;
    left: 1rem;
    background-color: rgba(37, 83, 179, 0.68);
    border-radius: 4px;
    width: 80%;
    max-height: 0;
    color: transparent;
    overflow-y: hidden;
    opacity: 0;
    transition: opacity 0.56s linear;
  }

  &:hover {
    &::before {
      opacity: 1;
      color: #fff;
      max-height: 4.7rem;
      padding: 1rem;
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
