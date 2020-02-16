import gql from 'graphql-tag'

export const FETCH_SPECIALTIES = gql`
  query Specialties($search: String!) {
    specialties(search: $search) {
      id
      name
      description
    }
  }
`
