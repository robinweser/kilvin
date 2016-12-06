import { createComponent } from 'react-fela'

const View = props => ({
  display: props.hidden ? 'none' : 'flex',
  zIndex: props.zIndex,
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
})

export default createComponent(View)
