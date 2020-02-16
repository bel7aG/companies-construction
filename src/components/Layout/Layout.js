import React from 'react'
import PropTypes from 'prop-types'

import { Header } from 'components'
import { SLayout } from './SLayout'

const Layout = ({ children, ...props }) => {
  const { pathname } = props

  return (
    <SLayout>
      {pathname === '/companies' && (
        <Header title="cosuno">{children[0]}</Header>
      )}
      <main>{pathname === '/companies' ? children[1] : children}</main>
    </SLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  pathname: PropTypes.string.isRequired,
}

export default Layout
