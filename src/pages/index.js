import React from 'react'
import { Router, Location } from '@reach/router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Header, SEO } from 'components'

import Landing from './LandingPage'
import Companies from './CompaniesPage'
import NotFound from './NotFound'

import 'styles/index.scss'

const AppRouter = () => {
  return (
    <div>
      <SEO title="Home" />
      <Location>
        {({ location }) => (
          <TransitionGroup className="transition-group">
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <>
                {location.pathname !== '/' && <Header />}
                <Router location={location} className="router">
                  <Landing path="/" />
                  <Companies path="companies" />
                  <NotFound default />
                </Router>
              </>
            </CSSTransition>
          </TransitionGroup>
        )}
      </Location>
    </div>
  )
}

export default AppRouter
