/** @jsxRuntime classic */
/** @jsx jsx */
import { NavLink } from 'react-router-dom'
import { jsx } from 'theme-ui'

function Profile(props) {
  console.log('user', props)
  return (
    <div>
      <div>Profile</div>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <div>{props.user ? props.user.name : 'no user'}</div>
    </div>
  )
}

export default Profile
