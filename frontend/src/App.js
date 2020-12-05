import { useAuth0 } from '@auth0/auth0-react'
import { NavLink, Route, Switch } from 'react-router-dom'

import ProtectedRoute from './auth/protected-route'
import { Loading } from './components'
import AuthenticationButton from './components/authentication-button'
import SignupButton from './components/signup-button'
import { Home, Private } from './views'

function App() {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <div>
        <AuthenticationButton />
        <SignupButton />
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/private" exact>
          Private
        </NavLink>
      </div>
      <div>{isAuthenticated ? 'authenticated' : 'not authenticated'}</div>
      <Switch>
        <Route path="/" exact component={Home} />
        <ProtectedRoute path="/private" component={Private} />
      </Switch>
    </div>
  )
}

export default App
