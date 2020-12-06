/** @jsxRuntime classic */
/** @jsx jsx */
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { jsx } from 'theme-ui'

function LogoutButton() {
  const { logout } = useAuth0()

  return (
    <button
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      sx={{ variant: 'buttons.outline' }}
    >
      Log Out
    </button>
  )
}

export default LogoutButton
