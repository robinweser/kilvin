(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react-fela')) :
  typeof define === 'function' && define.amd ? define(['react-fela'], factory) :
  (global.Kilvin = factory(global.ReactFela));
}(this, function (reactFela) { 'use strict';

  var Absolute = function Absolute(props) {
    return {
      display: 'flex',
      position: props.fixed && 'fixed' || 'absolute',
      top: props.top,
      left: props.left,
      right: props.right,
      bottom: props.bottom,
      width: props.width,
      height: props.height
    };
  };

  var Absolute$1 = reactFela.createComponent(Absolute);
  module.exports = exports['default'];

  var Box = function Box(props) {
    return {
      // container
      padding: props.padding,
      margin: props.margin,
      border: props.border,
      borderWidth: props.borderWidth,
      overflow: props.overflow ? 'visible' : 'hidden',
      maxWidth: '100%',

      // flex props
      flexGrow: props.grow === true ? 1 : props.grow,
      flexShrink: props.shrink || 0,
      flexBasis: props.basis || 'auto',
      flex: props.flex === true ? 1 : props.flex,
      justifyContent: props.justifyContent || props.center && 'center',
      alignItems: props.alignItems || props.center && 'center',
      alignContent: props.alignContent || 'flex-start',
      alignSelf: props.alignSelf || 'stretch',
      order: props.order,

      // shorthands
      display: 'flex' + (props.inline ? '-inline' : ''),
      flexWrap: props.wrap && 'wrap' || props.wrapReverse && 'wrap-reverse' || 'nowrap',
      flexDirection: (props.row ? 'row' : 'column') + (props.reverse ? '-reverse' : '')
    };
  };

  var Box$1 = reactFela.createComponent(Box);
  module.exports = exports['default'];

  var ScrollView = function ScrollView(props) {
    return {
      overflowY: props.horizontal ? 'hidden' : 'auto',
      overflowX: props.horizontal ? 'auto' : 'hidden',
      WebkitOverflowScrolling: 'touch',
      height: props.height || '100%',
      width: props.width || '100%',
      flex: props.flex
    };
  };

  var ScrollView$1 = reactFela.createComponent(ScrollView);
  module.exports = exports['default'];

  var Spacer = function Spacer(props) {
    return {
      minHeight: !props.horizontal && props.size,
      minWidth: props.horizontal && props.size,
      flex: '0 0 ' + props.size
    };
  };

  var Spacer$1 = reactFela.createComponent(Spacer);
  module.exports = exports['default'];

  var Text = function Text(props) {
    return {
      fontFamily: props.family,
      fontSize: props.size,
      lineHeight: props.height,
      fontWeight: props.weight || props.bold && 700 || 400,
      fontStyle: props.italic && 'italic',
      color: props.color,

      extend: [{
        condition: props.antialiased,
        style: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }
      }, {
        condition: props.ellipsis,
        style: {
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        }
      }]
    };
  };

  var Text$1 = reactFela.createComponent(Text);
  module.exports = exports['default'];

  var View = function View(props) {
    return {
      display: props.hidden ? 'none' : 'flex',
      zIndex: props.zIndex,
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    };
  };

  var View$1 = reactFela.createComponent(View);
  module.exports = exports['default'];

  var index = {
    Absolute: Absolute$1,
    Box: Box$1,
    ScrollView: ScrollView$1,
    Spacer: Spacer$1,
    Text: Text$1,
    View: View$1
  };
  module.exports = exports['default'];

  return index;

}));
//# sourceMappingURL=kilvin.js.map