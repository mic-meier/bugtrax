import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-5ei70w5d.eu.auth0.com"
      clientId="WlqH7S991dotJhTP0Zgq8Eqr6NapNZP6"
      redirectUri={window.location.origin}
      audience="bugtrax/api"
      scope="read:secured"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
