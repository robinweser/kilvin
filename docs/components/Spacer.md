# Spacer

Spacer simply adds whitespace.<br>
It renders a `<Box>` passing both `basis` and `width`to act as a spacer.

### Props

| Property |  Value     | Description                                        |
| -------- | ---------- | -------------------------------------------------- |
| size     | _(number)_ | Whitespace size as a multiple of the baselineGrid. |

### Example

```javascript
import { Spacer, Box } from 'kilvin'

export default () => (
  <Box>
    <Box>We are separated</Box>
    <Spacer size={30} />
    <Box>by 30px</Box>
  </Box>
)
```

<img src="../res/Spacer.png">
