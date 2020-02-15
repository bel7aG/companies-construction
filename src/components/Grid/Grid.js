import React from 'react'
import PropTypes from 'prop-types'

import { SGrid } from './SGrid'

const Grid = ({ children }) => {
  return <SGrid>{children}</SGrid>
}

Grid.protoTypes = {
  children: PropTypes.node,
}

export default Grid
