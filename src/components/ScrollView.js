import React from 'react'

import Box from '../Box'

export default function ScrollView({ extend, children, ...props }) {
  return (
    <Box
      {...props}
      shrink={1}
      grow={1}
      maxHeight="100%"
      extend={{
        WebkitOverflowScrolling: 'touch',
        overflow: 'auto',
        ...extend,
      }}>
      {children}
    </Box>
  )
}
