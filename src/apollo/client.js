import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

const client = new ApolloClient({
  // uri: 'http://localhost:5000/graphql',
  uri: 'https://cosuno.herokuapp.com/graphql',
  fetch,
})

export default client
