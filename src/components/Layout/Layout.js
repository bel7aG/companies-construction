import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Header } from 'components'
import { SLayout } from './SLayout'

const Layout = ({ children, ...props }) => {
  const { pathname } = props

  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    pathname === '/companies' ? setShowHeader(true) : setShowHeader(false)
  }, [pathname])

  return (
    <SLayout>
      {showHeader && <Header>{children[0]}</Header>}
      {<main>{showHeader ? children[1] : children}</main>}
    </SLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  pathname: PropTypes.string.isRequired,
}

export default Layout
