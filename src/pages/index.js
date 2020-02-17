import React from 'react'
import { Router, Location } from '@reach/router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Landing from './LandingPage'
import Companies from './CompaniesPage'
import NotFound from './NotFound'

const AppRouter = () => {
  return (
    <Location>
      {({ location }) => (
        <TransitionGroup className="transition-group">
          <CSSTransition key={location.key} classNames="fade" timeout={920}>
            <Router location={location} className="router">
              <Landing path="/app" />
              <Companies path="companies" />
              <NotFound default />
            </Router>
          </CSSTransition>
        </TransitionGroup>
      )}
    </Location>
  )
}

export default AppRouter
