/** @jsxRuntime classic */
/** @jsx jsx */
import { useAuth0 } from '@auth0/auth0-react'
import { NavLink } from 'react-router-dom'
import { jsx } from 'theme-ui'

import { Modal, ModalContents, ModalOpenButton } from '../components/modal'
import { client } from '../utils/api-client'

function ProjectForm({ onSubmit, submitButton }) {
  function handleSubmit(event) {
    event.preventDefault()
    const { name, key, description } = event.targets.elements

    const data = client('projects', {
      data: { name: name, key: key, description: description },
    })
  }
  return <div>Project Form</div>
}

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
          <ProjectForm />
        </ModalContents>
      </Modal>
    </div>
  )
}

export default Projects
