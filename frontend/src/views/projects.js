/** @jsxRuntime classic */
/** @jsx jsx */
import { NavLink } from 'react-router-dom'
import { jsx } from 'theme-ui'

import { Modal, ModalContents, ModalOpenButton } from '../components/modal'

function Projects() {
  return (
    <div>
      <div>Projects</div>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <Modal>
        <ModalOpenButton>
          <button sx={{ variant: 'primary' }}>New Project</button>
        </ModalOpenButton>
        <ModalContents aria-label="New Project form" title="Create Project">
          Hello
        </ModalContents>
      </Modal>
    </div>
  )
}

export default Projects
