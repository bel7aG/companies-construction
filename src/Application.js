import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'

import client from 'apollo'
import './styles/index.scss'

export default ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
