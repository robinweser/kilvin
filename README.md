# Kilvin

Kilvin is a set of universal & primitive Layout Components for [React](https://github.com/facebook/react/).<br>
It is build with [Fela](https://github.com/robinweser/fela/) and requires [react-fela](https://github.com/robinweser/fela/tree/master/packages/react-fela). It is intended to be used in projects that use [Fela](https://github.com/robinweser/fela/) anyways.

Each component is carefully crafted and well tested in production.

<img alt="npm downloads" src="https://img.shields.io/npm/dm/kilvin.svg"> <img alt="npm version" src="https://badge.fury.io/js/kilvin.svg"> <img alt="gzipped size" src="https://img.shields.io/badge/gzipped-0.93kb-brightgreen.svg">

## Installation

```sh
yarn add kilvin
```

Alternatively use `npm i --save kilvin`.

## The Gist

```js
import { Absolute, Box, Spacer } from 'kilvin'

export default () => (
  <Box space={2}>
    <Absolute top={0} left={0} fixed>
      Fixed in the upper left corner.
    </Absolute>
    <Box padding={2}>A</Box>
    <Box padding={3} width={50}>
      B
    </Box>
  </Box>
)
```

## Documentation

- [Introduction](https://kilvin.js.org/docs/Introduction.html)
- [Usage](https://kilvin.js.org/docs/Usage.html)
  - [Basic](https://kilvin.js.org/docs/usage/Basic.html)
  - [Advanced](https://kilvin.js.org/docs/usage/Advanced.html)
- [Components](https://kilvin.js.org/docs/Components.html)
  - [Absolute](https://kilvin.js.org/docs/components/Absolute.html)
  - [Box](https://kilvin.js.org/docs/components/Box.html)
  - [ScrollView](https://kilvin.js.org/docs/components/ScrollView.html)
  - [Spacer](https://kilvin.js.org/docs/components/Spacer.html)
- [Changelog](https://kilvin.js.org/docs/Changelog.html)

## License

Kilvin is licensed under the [MIT License](http://opensource.org/licenses/MIT).<br>
Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).<br>
Created with ♥ by [@robinweser](http://weser.io) and all the great contributors.
