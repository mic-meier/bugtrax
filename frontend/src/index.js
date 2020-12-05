import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'theme-ui'

import App from './App'
import theme from './theme/index'

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID
const scope = process.env.REACT_APP_API_SCOPE
const audience = process.env.REACT_APP_API_AUDIENCE

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Auth0Provider
        domain={domain}
        clientId={clientID}
        redirectUri={window.location.origin}
        audience={audience}
        scope={scope}
      >
        <App />
      </Auth0Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
