import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import ProtectedRoute from './auth/protected-route'
import Loading from './components/loading'
import NavBar from './components/navbar'
import { client } from './utils/api-client'
import { Home, Profile, Projects } from './views'

function App() {
  const { user, isLoading, getAccessTokenSilently } = useAuth0()

  console.log('user', user)

  useEffect(() => {
    const registerUserInDB = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: process.env.REACT_APP_API_AUDIENCE,
          scope: 'read:secured',
        })

        const response = await client(`users/${user.sub}`, {
          token: accessToken,
        })

        const userInDB = await response.json()

        if (!userInDB) {
          await client('users', { data: user, token: accessToken })
        }
      } catch (e) {
        console.log(e)
      }
    }
    if (user) {
      registerUserInDB()
    }
  }, [getAccessTokenSilently, user])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <ProtectedRoute path="/projects" component={Projects} />
        <ProtectedRoute path="/profile" component={Profile} />
      </Switch>
    </div>
  )
}

export default App
