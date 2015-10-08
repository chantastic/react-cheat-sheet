import extendWithDefaults from '../assignSharedDefaults';

const data = [
  {
    name: 'componentWillMount',
    example: `componentWillMount: function () {
  // invoked once, before initial 'render'
}`,
    reference: 'http://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount',
  },
  {
    name: 'componentDidMount',
    example: `componentDidMount: function () {
  // invoked once (client-only), after initial 'render'
  // good for AJAX, setTimeout, setInterval
}`,
    reference: 'http://facebook.github.io/react/docs/component-specs.html#mounting-componentdidmount',
  },
  {
    name: 'componentWillReceiveProps',
    example: `componentWillReceiveProps: function (nextProps) {
  // invoked when component is receiving props, not for initial 'render'
}`,
    reference: 'http://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops',
  },
  {
    name: 'shouldComponentUpdate',
    example: `shouldComponentUpdate: function (nextProps, nextState) {
  // invoked before rendering with new props, not for initial 'render'
}`,
    reference: 'http://facebook.github.io/react/docs/component-specs.html#updating-shouldcomponentupdate',
  },
  {
    name: 'componentWillUpdate',
    example: `componentWillUpdate: function (nextProps, nextState) {
  // invoked immediately before rendering with new props or state, not for initial 'render'
  // CANNOT CALL setState(). see componentWillReceiveProps
}`,
    reference: 'http://facebook.github.io/react/docs/component-specs.html#updating-componentwillupdate',
  },
  {
    name: 'componentDidUpdate',
    example: `componentDidUpdate: function (nextProps, nextState) {
  // invoked immediately after DOM updates, not for initial 'render'
}`,
    reference: 'http://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate',
  },
  {
    name: 'componentWillUnmount',
    example: `componentWillUnmount: function () {
  // invoked immediately before a component is unmounted from the DOM
}`,
    reference: 'http://facebook.github.io/react/docs/component-specs.html#unmounting-componentwillunmount',
  },
];

export default extendWithDefaults(data, { module: 'react', color: '#ff851b' });
