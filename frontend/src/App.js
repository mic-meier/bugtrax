import { useAuth0 } from '@auth0/auth0-react'

import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

function App() {
  const { isAuthenticated } = useAuth0()

  return isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

export default App
