/** @jsxRuntime classic */
/** @jsx jsx */
import { NavLink } from 'react-router-dom'
import { jsx } from 'theme-ui'

function Profile() {
  return (
    <div>
      <div>Profile</div>
      <NavLink to="/" exact>
        Home
      </NavLink>
    </div>
  )
}

export default Profile
