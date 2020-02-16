import React from 'react'
import PropTypes from 'prop-types'

import { SSearchBar } from './SSearchBar'

const SearchBar = ({ handleSearch, ...props }) => {
  const { value } = props

  return (
    <SSearchBar>
      <input placeholder="Search..." value={value} onChange={handleSearch} />
    </SSearchBar>
  )
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default SearchBar
