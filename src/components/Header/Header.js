import React from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

import { SHeader } from './SHeader'

const Header = ({ children }) => {
  return (
    <SHeader>
      <div>
        <div>
          <Link to="/">Cosuno</Link>
        </div>

        <div>{children}</div>
      </div>
    </SHeader>
  )
}

Header.propTypes = {
  children: PropTypes.node,
}

export default Header
