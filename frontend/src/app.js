import { useAuth0 } from '@auth0/auth0-react'
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import ProtectedRoute from './auth/protected-route'
import { Loading } from './components/loading'
import NavBar from './components/navbar'
import { client } from './utils/api-client'
import { Home, Profile, Projects } from './views'

function App() {
  const { user, isLoading, getAccessTokenSilently } = useAuth0()
  const [token, setToken] = React.useState(null)

  React.useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: process.env.REACT_APP_API_AUDIENCE,
          scope: 'read:secured',
        })

        setToken(accessToken)
      } catch (e) {
        console.log(e)
      }
    }
    getToken()
  }, [token, getAccessTokenSilently])

  React.useEffect(() => {
    if (!token) {
      return
    }

    const registerUserInDB = async () => {
      try {
        const userInDB = await client(`users/${user.sub}`, {
          token: token,
        })

        if (!userInDB) {
          await client('users', { data: user, token: token })
        }
      } catch (e) {
        console.log(e)
      }
    }
    if (user) {
      registerUserInDB()
    }
  }, [getAccessTokenSilently, user, token])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/projects">
          <Projects user={user} token={token} />
        </Route>
        <ProtectedRoute path="/profile" component={Profile} user={user} />
      </Switch>
    </div>
  )
}

export default App
