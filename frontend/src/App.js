import { useAuth0 } from '@auth0/auth0-react'

import AuthenticationButton from './components/authentication-button'

function App() {
  const { isAuthenticated } = useAuth0()

  return (
    <div>
      <div>
        <AuthenticationButton />
      </div>
      <div>{isAuthenticated ? 'authenticated' : 'not authenticated'}</div>
    </div>
  )
}

export default App
