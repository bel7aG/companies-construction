import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'

import Layout, { Scrollbar, SearchBar } from 'components'
import { Grid, Modal, FilterSVG } from 'components'

import { FETCH_COMPANIES } from 'apollo'

const Companies = props => {
  const {
    location: { pathname },
  } = props

  const { loading, data } = useQuery(FETCH_COMPANIES, {
    variables: { specialties: [] },
  })

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
              <div>
                <h1>okook</h1>
              </div>
              <div>
                <h1>okook</h1>
              </div>
              <div>
                <h1>okook</h1>
              </div>
              <div>
                <h1>okook</h1>
              </div>
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
