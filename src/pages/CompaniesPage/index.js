import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useSnackbar } from 'notistack'
import styled from 'styled-components'

import { FETCH_COMPANIES } from 'apollo'
import Layout, {
  Scrollbar,
  SearchBar,
  Grid,
  Modal,
  FilterSVG,
  Empty,
} from 'components'
import { SpecialtiesForm } from 'forms'
import Company from './Company'

const Companies = props => {
  const {
    location: { pathname },
  } = props

  const { enqueueSnackbar } = useSnackbar()

  const [companies, setCompanies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [specialties, setSpecialties] = useState([])

  const { loading, data, error } = useQuery(FETCH_COMPANIES, {
    variables: { specialties: [] }, //in the FUTURE (pagination)
  })

  useEffect(() => {
    if (data) {
      const { companies } = data
      setCompanies(
        companies.filter(
          ({ name, specialties: companySpecialties }) =>
            name.toLowerCase().includes(searchValue.toLowerCase()) &&
            (specialties.length === 0
              ? true
              : companySpecialties.find(({ id: specialtyID }) =>
                  specialties.includes(specialtyID)
                ))
        )
      )
    }
  }, [data, searchValue, specialties])

  useEffect(() => {
    if (error) {
      enqueueSnackbar('Connection problem.', {
        variant: 'error',
      })
    }
  }, [error])

  const handleSpecialties = specialties => {
    setSpecialties(specialties)
  }

  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal(prevState => !prevState)
  }

  const handleSearch = ({ target: { value } }) => {
    if (value === '' || value.match(/^[A-Za-z0-9]((?!\s{2}).)*$/)) {
      setSearchValue(value)
    }
  }

  let list = []

  if (companies.length) {
    list = companies.map(({ id, ...company }) => (
      <Company key={id} {...company} />
    ))
  }

  return (
    <>
      <Modal show={showModal} title="specialties" handleModal={handleModal}>
        <SpecialtiesForm handleSpecialties={handleSpecialties} />
      </Modal>
      <Layout pathname={pathname}>
        <SearchBar value={searchValue} handleSearch={handleSearch} />
        <SCompanies className="page">
          <div>
            <button disabled={showModal} onClick={handleModal}>
              <FilterSVG />
            </button>
          </div>

          {companies.length ? (
            <Scrollbar>
              <Grid>{list}</Grid>
            </Scrollbar>
          ) : (
            <Empty text={loading ? `Loading...` : `Company doesn't exist`} />
          )}
        </SCompanies>
      </Layout>
    </>
  )
}

const SCompanies = styled.div`
  height: 100vh;
  > div:first-child {
    z-index: 6;
    position: absolute;
    bottom: 1rem;
    right: 0.5rem;
    cursor: pointer;
  }
`

export default Companies
