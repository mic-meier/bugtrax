/** @jsxRuntime classic */
/** @jsx jsx */
import styled from '@emotion/styled/macro'
import { jsx } from 'theme-ui'

import theme from '../theme/index'

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

const inputStyles = {
  fontFamily: theme.fonts.body,
  paddingLeft: theme.space[2],
  paddingRight: theme.space[2],
  paddingTop: theme.space[3],
  paddingBottom: theme.space[3],
  marginBottom: theme.space[5],
  marginTop: theme.space[2],
  fontSize: theme.fontSizes[2],
  borderRadius: '0px',
  appearance: 'none',
  lineHeight: 'tight',
  backgroundColor: theme.colors.gray[0],
  border: 'none',
  borderBottomWidth: '2px',
  borderBottomStyle: 'solid',
  borderBottomColor: theme.colors.primary,
  color: 'gray.7',
  '&:focus': {
    outline: 'none',
    borderColor: 'primary',
    backgroundColor: 'white',
  },
}

const FormInput = styled.input({
  ...inputStyles,
})

const FormLabel = styled.label({
  fontFamily: theme.fonts.body,
  textTransform: 'uppercase',
  fontSize: theme.fontSizes[0],
  paddingTop: theme.space[2],
  margintop: theme.space[3],
})

const FormTextarea = styled.textarea({
  ...inputStyles,
})

export { FormGroup, FormInput, FormLabel, FormTextarea }
