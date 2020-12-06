/** @jsxRuntime classic */
/** @jsx jsx */
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { jsx } from 'theme-ui'

import colors from '../theme/colors'
import AuthenticationButton from './authentication-button'
import Avatar from './avatar'

const MainNav = () => {
  return (
    <React.Fragment>
      <NavLink
        to="/"
        exact
        activeStyle={{
          borderBottom: `4px solid ${colors.primary}`,
          paddingBottom: '8px',
        }}
        sx={{ variant: 'nav.link' }}
      >
        <span sx={{ variant: 'nav.linkText' }}>Home</span>
      </NavLink>
      <NavLink
        to="/projects"
        exact
        activeStyle={{
          borderBottom: `4px solid ${colors.primary}`,
          paddingBottom: '8px',
        }}
        sx={{ variant: 'nav.link' }}
      >
        <span sx={{ variant: 'nav.linkText' }}>Projects</span>
      </NavLink>
      <NavLink
        to="/profile"
        exact
        activeStyle={{
          borderBottom: `4px solid ${colors.primary}`,
          paddingBottom: '8px',
        }}
        sx={{ variant: 'nav.link' }}
      >
        <span sx={{ variant: 'nav.linkText' }}>Profile</span>
      </NavLink>
    </React.Fragment>
  )
}

const AuthNav = () => {
  const { user } = useAuth0()
  return (
    <div>
      {user ? <Avatar /> : null}
      <AuthenticationButton />
    </div>
  )
}

function NavBar() {
  return (
    <div>
      <header
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 16,
          justifyContent: 'space-between',
          px: 4,
          position: 'relative',
          backgroundColor: 'white',
          color: 'primary',
          ':after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            top: '100%',
            height: 1,
            background:
              'linear-gradient(180deg, rgba(9, 30,66,0.13) 0, rgba(9, 30,66,0.13) 1px, rgba(9,30,66,0.08) 1px, rgba(9,30,66,0) 4px)',
          },
        }}
      >
        <nav
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 'inherit',
            flexGrow: 1,
          }}
        >
          <div
            sx={{
              display: 'inherit',
              flexDirection: 'inherit',
              alignItems: 'inherit',
            }}
          >
            <Link to="/" sx={{ p: 1, mx: 4, textDecoration: 'none' }}>
              <span role="img" aria-label="logo">
                🐞
              </span>
            </Link>
          </div>
          <div
            sx={{
              display: 'flex',
              alignItems: 'stretch',
              flexGrow: 1,
              flexShrink: 0,
              flexBasis: 0,
              height: '100%',
              position: 'relative',
            }}
          >
            <MainNav />
          </div>
          <AuthNav />
        </nav>
      </header>
    </div>
  )
}

export default NavBar
