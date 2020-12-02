import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function LogoutButton() {
  const { logout } = useAuth0()

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  )
}

function AuthenticatedApp() {
  const { user, isLoading, getAccessTokenSilently } = useAuth0()

  React.useEffect(() => {
    const getApiResponse = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `bugtrax/api`,
          scope: 'read:secured',
        })

        const apiRespone = await fetch('http://localhost:3001/protected', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })

        const { message } = await apiRespone.json()
        console.log('message', message)
      } catch (e) {
        console.log(e.message)
      }
    }

    getApiResponse()
  }, [])

  if (isLoading) {
    return <div>Loading..</div>
  }

  return (
    <div>
      <LogoutButton />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <h3>User Metadata</h3>
    </div>
  )
}

export default AuthenticatedApp
