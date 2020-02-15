import React, { useState } from 'react'
import styled from 'styled-components'

import Layout, { Scrollbar, SearchBar } from 'components'
import { Grid, Modal, FilterSVG } from 'components'

const Companies = props => {
  const {
    location: { pathname },
  } = props

  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal(prevState => !prevState)
  }

  return (
    <>
      <Modal show={showModal} handleModal={handleModal}>
        <h1>okook</h1>
      </Modal>
      <Layout pathname={pathname}>
        <SearchBar />
        <SCompanies className="page">
          <div>
            <button disabled={showModal} onClick={handleModal}>
              <FilterSVG />
            </button>
          </div>
          <Scrollbar>
            <Grid>
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
            </Grid>
          </Scrollbar>
        </SCompanies>
      </Layout>
    </>
  )
}

const SCompanies = styled.div`
  position: relative;
  > div:first-child {
    z-index: 6;
    position: absolute;
    bottom: 1rem;
    right: 0.5rem;
    cursor: pointer;
  }
`

export default Companies
