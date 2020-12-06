/** @jsxRuntime classic */
/** @jsx jsx */
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { jsx } from 'theme-ui'

import LoginButton from './login-button'
import Logoutbutton from './logout-button'
import SignupButton from './signup-button'

function AuthenticationButton() {
  const { isAuthenticated } = useAuth0()

  return isAuthenticated ? (
    <Logoutbutton />
  ) : (
    <div>
      <SignupButton />
      <LoginButton />
    </div>
  )
}

export default AuthenticationButton
