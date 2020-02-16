import React from 'react'
import PropTypes from 'prop-types'
import { CompaniesSVG } from 'components'
import { SEmpty } from './SEmpty'

const Empty = props => {
  const { text } = props

  return (
    <SEmpty>
      <div>
        <CompaniesSVG />
        <p>{text}</p>
      </div>
    </SEmpty>
  )
}

Empty.propTypes = {
  text: PropTypes.string,
}

export default Empty
