# Changelog

## 4.0

### 4.1.0

- Support for the `grid-template-areas` CSS property

### 4.0.0 - 4.0.1

- fixed peerDependencies, React 18 support

## 3.0

### 3.1.1

- revert 3.1.0 due to regressions in behaviour

### 3.1.0

- new, unified `space` implementation on Box according to [Robin's blogpost](https://weser.io/blog/spacing-children-in-react)

### 3.0.1

- added `containerElement` to `<Box>`

### 3.0.0

- introducing a new `<Grid>` component
- added a new `spaceType` prop to `<Box>`
- `<Spacer>` now disappears when `space` is passed a `0`

## 2.0

### 2.0.8 - 2.0.11

- improved the prop types for `<Box>`

### 2.0.7

- fixed an issue with `0` values for baselineGrid multiplies

### 2.0.5 & 2.0.6

- fixed wrong import paths

### 2.0.4

- added missing (peer)Dependencies

### 2.0.3

- improved how the baselineGrid is applied

### 2.0.2

- readded `-webkit-overflow-scrolling: touch` to `<ScrollView>`

### 2.0.1

- removed old exports from the main file

### 2.0.0

With 2.0 we shipped a completely new version of Kilvin implementing the most modern patterns and supporting a better Fela setup.<br>
This release also removed the `<View>` and `<Text>` component.

## 1.0

### 1.0.1

- added `display: flex` to `<Absolute>`, `<ScrollView>` and `<View>`.

### 1.0.0

First release
