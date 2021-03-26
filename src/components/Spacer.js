import React from 'react'
import PropTypes from 'prop-types'
import { useFela } from 'react-fela'

import Box from './Box'

import applyMultiplier from '../utils/applyMultiplier'

function getDisplayBySize(size) {
  return size === 0 ? 'none' : 'flex'
}

export default function Spacer({ size = 1 }) {
  const { theme } = useFela()

  const spacing = applyMultiplier(theme.baselineGrid)
  const space = spacing(size)

  const display = Array.isArray(space)
    ? space.map(getDisplayBySize)
    : getDisplayBySize(space)

  return <Box display={display} width={space} basis={space} />
}
