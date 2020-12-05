import { Auth0Provider } from '@auth0/auth0-react'
import { useHistory } from 'react-router-dom'

function Auth0ProviderWithHistory({ children }) {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
  const audience = process.env.REACT_APP_API_AUDIENCE
  const scope = process.env.REACT_APP_API_SCOPE

  const history = useHistory()

  const onRedirectCallBack = (appState) => {
    history.push(appState?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallBack}
      audience={audience}
      scope={scope}
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithHistory
