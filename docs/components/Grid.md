# Grid

Grid is an alternative to Box whenever we want to use [CSS Grid Layout](https://developer.mozilla.org/de/docs/Web/CSS/CSS_Grid_Layout) instead.<br>

### Props

| Property  |  Value                                                                                          | Description                                   |
| --------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------- |
| as        | _(React Component)_                                                                             | The component it renders to. (default: `div`) |
| extend    | _(Style Object)_                                                                                | Extends the Fela style object                 |
| style     | _(Style Object)_                                                                                | Inline styles                                 |
| className | _(string)_                                                                                      | Custom CSS classes                            |
| gap       | _(length)_                                                                                      | CSS `grid-gap` property                       |
| columns   | [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) | CSS `grid-template-columns` property          |
| rows      | [grid-template-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)       | CSS `grid-template-rows` property             |
| areas     | [grid-template-areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)     | CSS `grid-template-areas` property            |

### Defaults

```CSS
{
  display: grid;
  box-sizing: border-box;
  grid-gap: 0
}
```

### BaselineGrid

The `gap` prop acts as multiples of an optional `baselineGrid` that can be passed with a theme.<br>
It defaults to `1` and thus works without a theme as well.

### Example

```javascript
import { Grid, Box } from 'kilvin'

const Centered = () => (
  <Grid gap={2} columns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}>
    <Box height={100} extend={{ backgroundColor: 'red' }}>
      Cell 1
    </Box>
    <Box height={100} extend={{ backgroundColor: 'blue' }}>
      Cell 2
    </Box>
    <Box height={100} extend={{ backgroundColor: 'green' }}>
      Cell 3
    </Box>
  </Grid>
)
```

<img src="../res/Grid.png">
