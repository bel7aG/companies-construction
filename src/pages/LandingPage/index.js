import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { Cover } from 'components'

const Landing = () => {
  return (
    <SLanding className="page">
      <Cover />
      <div>
        <div>
          <div>
            <Link to="/companies">explore</Link>
          </div>
        </div>
      </div>
    </SLanding>
  )
}

const SLanding = styled.div`
  opacity: 0;
  animation: fadeIn 0.49s 0.3s ease-out forwards;
  > div:nth-child(2) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

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
        rgba(37, 83, 179, 0.05),
        rgba(30, 69, 157, 0.54),
        rgba(22, 56, 136, 0.76),
        rgba(12, 44, 116, 0.88),
        rgba(12, 44, 116, 0.92),
        rgba(2, 32, 96, 0.92),
        rgba(2, 32, 96, 0.99),
        rgba(2, 32, 96, 1)
      );
    }

    > div {
      width: 100%;
      > div {
        opacity: 0;
        animation: fadeIn 0.49s 1s ease-out forwards;
        min-width: 26rem;
        max-width: 30vw;
        margin: 0 auto;
        border: 1px solid #fff;
        box-shadow: 0 0 22rem rgba(255, 255, 255, 0.15);
        transition: box-shadow 0.4s ease-out;

        > a {
          display: block;
          padding: 3rem 2rem;
          -webkit-text-stroke: 2px #fff;
          color: rgba(255, 255, 255, 0.69);
          letter-spacing: 8px;
          text-align: center;
          font-size: 5rem;
        }

        &:hover {
          box-shadow: 0 0 44rem rgba(2, 32, 96, 1);
        }
      }
    }
  }
`

export default Landing
