import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Company = props => {
  const { id, name, logo, specialties } = props

  return (
    <SCompany logo={logo}>
      <div>
        <div />
        <h1>{name}</h1>
      </div>
    </SCompany>
  )
}

const SCompany = styled.div`
  > div:first-child {
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
      margin-bottom: 2rem;
      text-align: center;
    }
  }
`

Company.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  specialties: PropTypes.array.isRequired,
}

export default Company
