import '@reach/dialog/styles.css'

import styled from '@emotion/styled/macro'
import { Dialog as ReachDialog } from '@reach/dialog'

const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
})

export default Dialog
