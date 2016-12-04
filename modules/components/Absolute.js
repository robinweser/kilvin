import { createComponent } from 'react-fela'

const Absolute = props => ({
  position: props.fixed && 'fixed' || 'absolute',
  top: props.top,
  left: props.left,
  right: props.right,
  bottom: props.bottom,
  width: props.width,
  height: props.height
})

export default createComponent(Absolute)
