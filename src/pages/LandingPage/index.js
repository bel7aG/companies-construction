import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

const Landing = () => {
  return (
    <SLanding className="page">
      <h1>this is landing page</h1>
      <Link to="/companies">explore</Link>
    </SLanding>
  )
}

const SLanding = styled.div`
  color: red;
`

export default Landing
