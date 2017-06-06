import { createComponent } from 'react-fela'

const Text = props => ({
  fontFamily: props.family,
  fontSize: props.size,
  lineHeight: props.height,
  fontWeight: props.weight || props.bold && 700 || 400,
  fontStyle: props.italic && 'italic',
  color: props.color,
  extend: [
    {
      condition: props.antialiased,
      style: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      }
    },
    {
      condition: props.ellipsis,
      style: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }
    }
  ]
})

export default createComponent(Text)
