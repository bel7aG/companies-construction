import React from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

import { SHeader } from './SHeader'

const Header = ({ children, ...props }) => {
  const { title } = props
  return (
    <SHeader>
      <div>
        <div>
          <Link to="/app">{title}</Link>
        </div>

        <div>{children}</div>
      </div>
    </SHeader>
  )
}

Header.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
}

export default Header
