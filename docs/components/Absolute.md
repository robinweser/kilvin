# Absolute

Absolute is component that is positioned `absolute`.<br>
It renders a `<Box>` component with the following additional CSS defaults:

### Defaults

Those defaults are added on top of the `<Box>` defaults.

```CSS
{
  position: absolute
}
```

### Props

| Property      |  Value     | Description           |
| ------------- | ---------- | --------------------- |
| top           | _(length)_ | CSS `top` property    |
| right         | _(length)_ | CSS `right` property  |
| bottom        | _(length)_ | CSS `bottom` property |
| left          | _(length)_ | CSS `left` property   |
| **Shortcuts** |            |                       |
| fixed         |            | Use `position: fixed` |

In addition to those props, Absolute also supports all the other `<Box>` props.

### Example

```javascript
import { Absolute } from 'kilvin'

const FixedTopLeft = (
  <Absolute
    fixed
    height={100}
    width={100}
    left={0}
    top={0}
    extend={{ backgroundColor: 'red' }}>
    I am a 100px sized box fixed in the top-left corner
  </Absolute>
)
```

<img src="../res/Absolute.png">
