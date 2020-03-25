# Box

Box is probably the most important component.<br>
It is used to craft detailed layouts based on flexbox.<br>
It also defines box-model properties such as padding, margin and border.<br>

It ships with sensible flexbox defaults:

```
{
  box-sizing: border-box;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch
}
```

### Props

| Property       |  Value                                                              | Description                                   |
| -------------- | ------------------------------------------------------------------- | --------------------------------------------- |
| space          | _(number)_                                                          | Adds space in between child components        |
| as             | _(React Component)_                                                 | The component it renders to. (default: `div`) |
| extend         | _(Style Object)_                                                    | Extends the Fela style object                 |
| display        | _(number)_                                                          | CSS `display` property                        |
| width          | _(length)_                                                          | CSS `width` property                          |
| minWidth       | _(length)_                                                          | CSS `minWidth` property                       |
| maxWidth       | _(length)_                                                          | CSS `maxWidth` property                       |
| height         | _(length)_                                                          | CSS `height` property                         |
| minHeight      | _(length)_                                                          | CSS `minHeight` property                      |
| maxHeight      | _(length)_                                                          | CSS `maxHeight` property                      |
| padding        | _(length)_                                                          | CSS `padding` property                        |
| paddingTop     | _(length)_                                                          | CSS `paddingTop` property                     |
| paddingRight   | _(length)_                                                          | CSS `paddingRight` property                   |
| paddingBottom  | _(length)_                                                          | CSS `paddingBottom` property                  |
| paddingLeft    | _(length)_                                                          | CSS `paddingLeft` property                    |
| margin         | _(length)_                                                          | CSS `margin` property                         |
| marginTop      | _(length)_                                                          | CSS `marginTop` property                      |
| marginRight    | _(length)_                                                          | CSS `marginRight` property                    |
| marginBottom   | _(length)_                                                          | CSS `marginBottom` property                   |
| marginLeft     | _(length)_                                                          | CSS `marginLeft` property                     |
| grow           | _(number)_                                                          | CSS `flex-grow` property                      |
| shrink         | _(number)_                                                          | CSS `flex-shrink` property                    |
| basis          | _(length)_                                                          | CSS `flex-basis` property                     |
| flex           | _(flex-grow)_ _(flex-shrink)_ _(flex-basis)_                        | CSS `flex` property                           |
| justifyContent | `flex-start`, `flex-end`, `center`, `space-between`, `space-around` | CSS `justify-content` property                |
| alignContent   | `flex-start`, `flex-end`, `center`, `space-between`, `space-around` | CSS `align-content` property                  |
| alignItems     | `flex-start`, `flex-end`, `center`, `baseline`, `stretch`           | CSS `align-items` property                    |
| alignSelf      | `flex-start`, `flex-end`, `center`, `baseline`, `stretch`           | CSS `align-self` property                     |
| order          | _(number)_                                                          | CSS `order` property                          |

### Defaults

```CSS
{
  display: flex;
  overflow: hidden;
  max-width: 100%;
  flex-shrink: 0;
  flex-basis: auto;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: flex-start;
  align-self: stretch
}
```

### Example

```javascript
import { Box } from 'kilvin'

const Centered = () => (
  <Box grow={1} justifyContent="center">
    <Box grow={1} alignItems="flex-start" extends={{ backgroundColor: 'red' }}>
      Start
    </Box>
    <Box grow={2} alignItems="center" extends={{ backgroundColor: 'blue' }}>
      Start
    </Box>
    <Box grow={1} alignItems="flex-end" extends={{ backgroundColor: 'green' }}>
      Start
    </Box>
  </Box>
)
```

<img src="../res/Box.png">
