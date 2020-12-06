/** @jsxRuntime classic */
/** @jsx jsx */
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { jsx } from 'theme-ui'

function Avatar() {
  const { user } = useAuth0()

  return (
    <img
      src={user.picture}
      alt="Avatar"
      sx={{
        verticalAlign: 'middle',
        width: 8,
        height: 8,
        borderRadius: 'full',
        mx: 2,
      }}
    />
  )
}

export default Avatar
