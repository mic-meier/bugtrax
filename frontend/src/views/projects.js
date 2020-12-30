/** @jsxRuntime classic */
/** @jsx jsx */
import { withAuthenticationRequired } from '@auth0/auth0-react'
import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { jsx } from 'theme-ui'

import { Loading, Spinner } from '../components/loading'
import { Modal, ModalContents, ModalOpenButton } from '../components/modal'
import { client } from '../utils/api-client'
import { useAsync } from '../utils/hooks'

function ProjectForm({ onSubmit, submitButton }) {
  const { isLoading, isError, error, run } = useAsync()

  function handleSubmit(event) {
    event.preventDefault()
    const { name, key, description } = event.target.elements

    run(
      onSubmit({
        name: name.value,
        key: key.value,
        description: description.value,
      })
    )
  }
  return (
    <form onSubmit={handleSubmit}>
      <div sx={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="name">Project Name</label>
        <input id="name" sx={{ variant: 'inputs.underline' }} />
      </div>
      <div>
        <label htmlFor="key">Project Key</label>
        <input id="key" sx={{ variant: 'inputs.shadow' }} />
      </div>
      <div>
        <label htmlFor="description">Project Name</label>
        <input id="description" sx={{ variant: 'inputs.indline' }} />
      </div>
      <div>
        {React.cloneElement(
          submitButton,
          { type: 'submit' },
          ...(Array.isArray(submitButton.props.children)
            ? submitButton.props.children
            : [submitButton.props.children]),
          isLoading ? <Spinner /> : null
        )}
      </div>

      {
        //TODO: ErrorMessage component
        isError ? <div>{error.message}</div> : null
      }
    </form>
  )
}

function Projects({ user, token }) {
  function handleSubmit({ name, key, description }) {
    return client('projects', {
      data: { name, key, description, sub: user.sub },
      token,
    }).then((response) => console.log(response))
  }

  return (
    <div>
      <div>Projects</div>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <Modal>
        <ModalOpenButton>
          <button sx={{ variant: 'buttons.simple' }}>New Project</button>
        </ModalOpenButton>
        <ModalContents aria-label="New Project form" title="Create Project">
          <ProjectForm
            onSubmit={handleSubmit}
            submitButton={
              <button sx={{ variant: 'buttons.simple' }}>Create</button>
            }
          />
        </ModalContents>
      </Modal>
    </div>
  )
}

export default withAuthenticationRequired(Projects, {
  onRedirecting: function loading() {
    return <Loading />
  },
})
