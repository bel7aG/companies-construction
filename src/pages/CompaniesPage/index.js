import React from 'react'
import styled from 'styled-components'

import Layout, { Scrollbar, SearchBar } from 'components'
import { FilterSVG } from 'components'

const Companies = props => {
  const {
    location: { pathname },
  } = props

  return (
    <Layout pathname={pathname}>
      <SearchBar />
      <SCompanies className="page">
        <button>
          <FilterSVG />
        </button>
        <Scrollbar>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
          <h1>this is Companies page</h1>
        </Scrollbar>
      </SCompanies>
    </Layout>
  )
}

const SCompanies = styled.div`
  position: relative;
  > button {
    z-index: 6;
    position: absolute;
    bottom: 1rem;
    right: 0.5rem;
    cursor: pointer;
  }
`

export default Companies
