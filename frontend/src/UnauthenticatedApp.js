import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
  const { loginWithPopup } = useAuth0()

  return <button onClick={() => loginWithPopup()}>Log In</button>
}

function UnauthenticatedApp() {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading..</div>
  }
  return (
    <div>
      <LoginButton />
    </div>
  )
}

export default UnauthenticatedApp
