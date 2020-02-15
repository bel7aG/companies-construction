import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'

import { FETCH_COMPANIES } from 'apollo'
import Layout, {
  Scrollbar,
  SearchBar,
  Grid,
  Modal,
  FilterSVG,
} from 'components'
import Company from './Company'

const Companies = props => {
  const {
    location: { pathname },
  } = props

  const [companies, setCompanies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const { loading, data, error } = useQuery(FETCH_COMPANIES, {
    variables: { specialties: [] },
  })

  useEffect(() => {
    if (data) {
      const { companies } = data
      setCompanies(
        companies.filter(({ name }) =>
          name.toLowerCase().includes(searchValue.toLowerCase())
        )
      )
    }
  }, [data, searchValue])

  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal(prevState => !prevState)
  }

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value)
  }

  let list = []

  if (companies.length) {
    list = companies.map(company => <Company key={company.id} {...company} />)
  }

  return (
    <>
      <Modal show={showModal} handleModal={handleModal}>
        <h1>okook</h1>
      </Modal>
      <Layout pathname={pathname}>
        <SearchBar value={searchValue} handleSearch={handleSearch} />
        <SCompanies className="page">
          <div>
            <button disabled={showModal} onClick={handleModal}>
              <FilterSVG />
            </button>
          </div>
          <Scrollbar>
            <Grid>{list}</Grid>
          </Scrollbar>
        </SCompanies>
      </Layout>
    </>
  )
}

const SCompanies = styled.div`
  > div:first-child {
    z-index: 6;
    position: absolute;
    bottom: 1rem;
    right: 0.5rem;
    cursor: pointer;
  }
`

export default Companies
