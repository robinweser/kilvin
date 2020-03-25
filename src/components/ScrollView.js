import React from 'react'

import Box from '../box'

export default function ScrollView({ extend, children, ...props }) {
  return (
    <Box
      {...props}
      shrink={1}
      grow={1}
      maxHeight="100%"
      extend={{ overflow: 'auto', ...extend }}>
      {children}
    </Box>
  )
}
