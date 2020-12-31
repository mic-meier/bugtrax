/** @jsxRuntime classic */
/** @jsx jsx */
import VisuallyHidden from '@reach/visually-hidden'
import * as React from 'react'
import { jsx } from 'theme-ui'

import Dialog from './dialog'

const callAll = (...fns) => (...args) => fns.forEach((fn) => fn && fn(...args))

const ModalContext = React.createContext()

function Modal(props) {
  const [isOpen, setIsOpen] = React.useState(false)

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />
}

function ModalDismissButton({ children: child }) {
  const [, setIsOpen] = React.useContext(ModalContext)

  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClick),
  })
}

function ModalOpenButton({ children: child }) {
  const [, setIsOpen] = React.useContext(ModalContext)

  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick),
  })
}

function ModalContentsBase(props) {
  const [isOpen, setIsOpen] = React.useContext(ModalContext)

  return (
    <Dialog isOpen={isOpen} onDismiss={() => setIsOpen(false)} {...props} />
  )
}

function ModalContents({ title, children, ...props }) {
  return (
    <ModalContentsBase {...props}>
      <div sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ModalDismissButton>
          <button>
            <VisuallyHidden>Close</VisuallyHidden>
            <span>x</span>
          </button>
        </ModalDismissButton>
      </div>
      <h3
        sx={{
          textAlign: 'left',
          fontSize: 3,
          fontWeight: 'semibold',
          pb: 3,
          mb: 6,
          mt: 0,
        }}
      >
        {title}
      </h3>
      {children}
    </ModalContentsBase>
  )
}

export {
  Modal,
  ModalContents,
  ModalContentsBase,
  ModalDismissButton,
  ModalOpenButton,
}
