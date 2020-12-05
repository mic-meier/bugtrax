/** @jsxRuntime classic */
/** @jsx jsx */
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { jsx } from 'theme-ui'

function Private() {
  const { user } = useAuth0()
  const { name, picture, email } = user

  return (
    <div>
      <div>
        <div>
          <div>
            <img src={picture} alt="Profile" />
          </div>
          <div>
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        </div>
        <div>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}

export default Private
