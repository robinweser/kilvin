import * as React from 'react'

import Box from './Box'

export default function Absolute({
  top,
  left,
  right,
  bottom,
  width,
  height,
  fixed = false,
  children,
  extend,
  ...props
}) {
  return (
    <Box
      {...props}
      extend={[
        {
          top,
          left,
          right,
          bottom,
          width,
          height,
          position: fixed ? 'fixed' : 'absolute',
        },
        extend,
      ]}>
      {children}
    </Box>
  )
}
