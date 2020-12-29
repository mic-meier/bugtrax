/** @jsxRuntime classic */
/** @jsx jsx */
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled/macro'
import React from 'react'
import { ImSpinner2 } from 'react-icons/im'
import { jsx } from 'theme-ui'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

const Spinner = styled(ImSpinner2)({
  animation: `${spin} 1s linear infinite`,
})
Spinner.defaultProps = {
  'aria-label': 'loading',
}

function Loading() {
  return (
    <div
      sx={{
        fontSize: 10,
        height: 'screenHeight',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'danger',
      }}
    >
      <Spinner />
    </div>
  )
}

export { Loading, Spinner }
