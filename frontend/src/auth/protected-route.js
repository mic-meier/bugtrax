import { withAuthenticationRequired } from '@auth0/auth0-react'
import React from 'react'
import { Route } from 'react-router-dom'

import { Loading } from '../components/loading'

const ProtectedRoute = ({ component, ...args }) => {
  console.log('args', args)
  return (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: function loading() {
          return <Loading />
        },
      })}
      {...args}
    />
  )
}

export default ProtectedRoute
