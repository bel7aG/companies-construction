import React from 'react'
import { Router, Location } from '@reach/router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import 'styles/index.scss'
import { Header, SEO } from 'components'
import Landing from './LandingPage'

const AppRouter = () => (
  <div>
    <Header />
    <SEO title="Home" />
    <Location>
      {({ location }) => (
        <TransitionGroup className="transition-group">
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Router location={location} className="router">
              <Landing path="/" />
            </Router>
          </CSSTransition>
        </TransitionGroup>
      )}
    </Location>
  </div>
)

export default AppRouter
