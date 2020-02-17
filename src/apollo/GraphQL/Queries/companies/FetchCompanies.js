import gql from 'graphql-tag'

export const FETCH_COMPANIES = gql`
  query Companies($specialties: [ID!]!) {
    companies(specialties: $specialties) {
      id
      name
      logo
      city
      specialties {
        id
        name
        description
      }
    }
  }
`
