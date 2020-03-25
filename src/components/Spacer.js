import React from 'react'
import PropTypes from 'prop-types'
import { useFela } from 'react-fela'

import Box from './Box'

import applyMultiplier from '../../utils/applyMultiplier'

export default function Spacer({ size = 1 }) {
  const { theme } = useFela()

  const spacing = applyMultiplier(theme.baselineGrid)

  return <Box width={spacing(size)} basis={spacing(size)} />
}
