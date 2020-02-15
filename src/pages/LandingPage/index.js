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

const SLanding = styled.div`
  > div:not(:first-child) {
    height: 100vh;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      background-image: radial-gradient(
        circle,
        rgba(37, 83, 179, 0.46),
        rgba(30, 69, 157, 0.54),
        rgba(22, 56, 136, 0.76),
        rgba(12, 44, 116, 0.88),
        rgba(12, 44, 116, 0.92),
        rgba(2, 32, 96, 0.92),
        rgba(2, 32, 96, 0.99),
        rgba(2, 32, 96, 1)
      );
    }
  }
`

export default Landing
