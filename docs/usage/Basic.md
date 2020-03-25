# Basic Usage

## Setup

If you did not use [Fela](https://github.com/robinweser/fela/) yet, I highly recommend reading through the whole [documentation](http://fela.js.org).<br>
You should read the [Usage with React](http://fela.js.org/docs/guides/UsageWithReact.html) guide and wrap your whole application with the `<Provider>` component provided by [react-fela](https://github.com/robinweser/fela/tree/master/packages/react-fela).
<br>
After setting up react-fela, you can simply import any Kilvin component and use it as is.

#### Example

```javascript
import React from 'react'
import { render } from 'react-dom'
import { RendererProvider } from 'react-fela'
import { createRenderer } from 'fela'
import plugins from 'fela-preset-web'

import { Absolute, Box } from 'kilvin'

const renderer = createRenderer({
  plugins,
})

render(
  <RendererProvider renderer={renderer}>
    <Box space={2}>
      <Absolute top={0} left={0} fixed>
        Fixed in the upper left corner.
      </Absolute>
      <Box padding={2}>A</Box>
      <Box padding={3} width={50}>
        B
      </Box>
    </Box>
  </RendererProvider>,
  document.getElementById('app')
)
```
