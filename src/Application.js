import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { SnackbarProvider } from 'notistack'

import client from 'apollo'
import './styles/index.scss'

export default ({ element }) => {
  const anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
  }

  return (
    <ApolloProvider client={client}>
      <SnackbarProvider anchorOrigin={anchorOrigin} hideIconVariant>
        {element}
      </SnackbarProvider>
    </ApolloProvider>
  )
}
