import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { Cover } from 'components'

const Landing = () => {
  return (
    <SLanding className="page">
      <Cover />
      <div>
        <Link to="/companies">explore</Link>
      </div>
    </SLanding>
  )
}

const SLanding = styled.div``

export default Landing
