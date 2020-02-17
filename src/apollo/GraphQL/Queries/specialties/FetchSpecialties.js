import gql from 'graphql-tag'

export const FETCH_SPECIALTIES = gql`
  query Specialties {
    specialties {
      id
      name
      description
    }
  }
`
