import { createComponent } from 'react-fela'

const ScrollView = props => ({
  overflowY: props.horizontal ? 'hidden' : 'auto',
  overflowX: props.horizontal ? 'auto' : 'hidden',
  WebkitOverflowScrolling: 'touch',
  height: props.height || '100%',
  width: props.width || '100%',
  flex: props.flex
})

export default createComponent(ScrollView)
