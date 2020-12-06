/** @jsxRuntime classic */
/** @jsx jsx */
import { NavLink } from 'react-router-dom'
import { jsx } from 'theme-ui'

function Projects() {
  return (
    <div>
      <div>Projects</div>
      <NavLink to="/" exact>
        Home
      </NavLink>
    </div>
  )
}

export default Projects
