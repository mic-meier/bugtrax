/** @jsxRuntime classic */
/** @jsx jsx */
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { jsx } from 'theme-ui'

function LoginButton() {
  const { loginWithPopup } = useAuth0()

  return <button onClick={() => loginWithPopup()}>Log In</button>
}

export default LoginButton
