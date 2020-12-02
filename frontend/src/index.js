import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID
const scope = process.env.REAC_APP_SCOPE
const audience = process.env.REACT_APP_AUDIENCE

console.log('domain', domain)

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      redirectUri={window.location.origin}
      audience={audience}
      scope={scope}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
