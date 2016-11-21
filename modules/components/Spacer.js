import { createComponent } from 'react-fela'

const Spacer = props => ({
  // container
  minHeight: !props.horizontal && props.size,
  minWidth: props.horizontal && props.size,
  flex: '0 0 ' + props.size
})

export default createComponent(Spacer)
