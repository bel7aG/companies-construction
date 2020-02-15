import React from 'react'
import PropTypes from 'prop-types'
import { SScrollbar } from './SScrollbar'

const Scrollbar = ({ children, className = '', fake = false }) =>
  fake ? (
    <>{children}</>
  ) : (
    <SScrollbar className={className}>{children}</SScrollbar>
  )

Scrollbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fake: PropTypes.bool,
}

export default Scrollbar
