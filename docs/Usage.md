# Usage

## Setup
If you did not use [Fela](https://github.com/rofrischmann/fela/) yet, I highly recommend reading through the whole [documentation](http://fela.js.org).<br>
You should read the [Usage with React](http://fela.js.org/docs/guides/UsageWithReact.html) guide and wrap your whole application with the `<Provider>` component provided by [react-fela](https://github.com/rofrischmann/fela/tree/master/packages/react-fela).
<br>
After setting up react-fela, you can simply import any Kilvin component and use it as is. They've all been created using the `createComponent` API.

#### Example
```javascript
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-fela'
import { createRenderer } from 'fela'
import { View, Box } from 'kilvin'

import presetWeb from 'fela-preset-web'

const renderer = createRenderer({
  plugins: [
    ...presetWeb
  ]
})

const mountNode = document.getElementById('stylesheet')

render(
  <Provider renderer={renderer} mountNode={mountNode}>
    <View style={{ backgroundColor: 'blue' }}/>
      <Box grow>
        Hello World
      </Box>
    </View>
  </Provider>,
  document.getElementById('app')
)
```
