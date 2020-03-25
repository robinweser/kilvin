# ScrollView

ScrollView is a simple component adding scrollbars for overflowing content.<br>
It renders a `<Box>` component under the hood with some additional defaults.

It supports all props that are supported by `<Box>` as well.

### Defaults

```CSS
{
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  flex-shrink: 1;
  flex-grow: 1;
  max-height: 100%;
}
```

### Example

```javascript
import { ScrollView } from 'kilvin'

const List = () => (
  <ScrollView height={50} extend={{ backgroundColor: 'red' }}>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
    <li>Item 6</li>
    <li>Item 7</li>
    <li>Item 8</li>
    <li>Item 9</li>
  </ScrollView>
)
```

<img src="../res/ScrollView.png">
