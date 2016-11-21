import { createComponent } from 'react-fela'

const ScrollView = props => ({
  overflowY: props.horizontal ? 'hidden' : 'auto',
  overflowX: props.horizontal ? 'auto' : 'hidden',
  WebkitOverflowScrolling: 'touch',
  height: '100%',
  width: '100%',
  flex: 1
})

export default createComponent(ScrollView)
