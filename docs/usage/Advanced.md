# Advanced Usage

Despite the basic usage, we can also add some Fela plugins to make the components (especially `<Box>`) even more useful.

## Responsive Values

A great way to extend the ability of our components is by adding the [responsive-value](https://github.com/robinweser/fela/tree/master/packages/fela-plugin-responsive-value) plugin. That way we can pass arrays of values mapping to individual breakpoints.

In order to make it work we need to provide a function that resolves the media queries based on the array length and a list of supported properties.

### Setup

```js
import { createRenderer } from 'fela'
import responsiveValue from 'fela-plugin-responsive-value'

// if we have 2 values, use default and large media query
// if we get 3, also use a tablet media query in between
const getMediaQueries = (values, props) => {
  if (values.length === 2) {
    return ['@media (min-width: 1024px)']
  }

  return ['@media (min-width: 800px)', '@media (min-width: 1024px)']
}

const renderer = createRenderer({
  plugins: [
    responsiveValue(getMediaQueries, {
      padding: true,
      paddingTop: true,
      paddingRight: true,
      paddingBottom: true,
      paddingLeft: true,
      margin: true,
      marginTop: true,
      marginRight: true,
      marginBottom: true,
      marginLeft: true,
    }),
  ],
})
```

### Usage

```js
import { Box } from 'kilvin'

export default () => (
  <Box padding={[4, 6, 8]}>
    <Box width={300}>A</Box>
  </Box>
)
```

One can also skip breakpoints by passing an empty item e.g. `[4, ,8]`
