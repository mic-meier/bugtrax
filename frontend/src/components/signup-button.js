/** @jsxRuntime classic */
/** @jsx jsx */
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { jsx } from 'theme-ui'

function SignupButton() {
  const { loginWithPopup } = useAuth0()

  return (
    <button
      onClick={() =>
        loginWithPopup({
          screen_hint: 'signup',
        })
      }
    >
      Register
    </button>
  )
}

export default SignupButton
