import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useSnackbar } from 'notistack'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import PropTypes from 'prop-types'

import { FETCH_SPECIALTIES } from 'apollo'
import { SSpecialtiesForm } from './SSpecialtiesForm'

const SpecialtiesForm = ({ handleSpecialties }) => {
  const { enqueueSnackbar } = useSnackbar()

  const [specialties, setSpecialties] = useState([])
  const [checkedItems, setCheckedItems] = React.useState({})

  const { loading, data, error } = useQuery(FETCH_SPECIALTIES, {
    variables: { search: '' },
  })

  useEffect(() => {
    if (data) {
      const { specialties } = data
      setSpecialties(specialties)
    }
  }, [data])

  useEffect(() => {
    handleSpecialties(
      Object.keys(checkedItems)
        .map(key => {
          if (checkedItems[key]) {
            return key.toString().replace(key[0], '')
          }
        })
        .filter(element => element)
    )
  }, [checkedItems])

  useEffect(() => {
    if (error) {
      enqueueSnackbar('Connection problem.', {
        variant: 'error',
      })
    }
  }, [error])

  const handleChange = ({ target: { name, checked } }) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [`X${name}`]: checked,
    }))
  }

  const specialtiesItems = specialties.map(({ id, name }) => (
    <FormControlLabel
      key={id}
      control={<Checkbox name={id} onChange={handleChange} color="primary" />}
      label={name}
    />
  ))

  return (
    <SSpecialtiesForm>
      {loading ? <p>loading...</p> : specialtiesItems}
    </SSpecialtiesForm>
  )
}

SpecialtiesForm.propTypes = {
  handleSpecialties: PropTypes.func.isRequired,
}

export default SpecialtiesForm
