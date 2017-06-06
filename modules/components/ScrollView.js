/* @flow */
import { createComponent } from 'react-fela'

type ScrollViewProps = {
  horizontal?: boolean,
  flex?: number | string,
  height?: number | string,
  width?: number | string
};
const ScrollView = (props: ScrollViewProps) => ({
  display: 'flex',
  overflowY: props.horizontal ? 'hidden' : 'auto',
  overflowX: props.horizontal ? 'auto' : 'hidden',
  WebkitOverflowScrolling: 'touch',
  height: props.height || '100%',
  width: props.width || '100%',
  flex: props.flex
})

export default createComponent(ScrollView)
