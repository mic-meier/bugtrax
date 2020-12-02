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
    const registerUserInDB = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `bugtrax/api`,
          scope: 'read:secured',
        })

        const respone = await fetch(`http://localhost:3001/users/${user.sub}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })

        const userInDB = await respone.json()

        if (!userInDB) {
          await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          })
        }
      } catch (e) {
        console.log(e)
      }
    }

    registerUserInDB()
  }, [getAccessTokenSilently, user])

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
