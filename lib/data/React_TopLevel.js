'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assignSharedDefaults = require('../assignSharedDefaults');

var _assignSharedDefaults2 = _interopRequireDefault(_assignSharedDefaults);

var data = [{
  name: 'Component',
  example: '// ES2015\n\nclass MyComponent extends React.Component {\n  render () {\n    return <div />;\n  }\n}\n',
  reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.component'
}, {
  name: 'createClass',
  example: 'var MyComponent = React.createClass({\n  render: function () {\n    return <div />;\n  }\n});',
  reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.createclass'
}, {
  name: 'createElement',
  example: 'React.createElement(\'div\', props, ...children); // String\n\nReact.createElement(MyComponent, props, ...children); // ReactClass type',
  reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.createelement'
}, {
  name: 'cloneElement',
  example: 'React.cloneElement(element, props, ...children);',
  reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.cloneelement'
}, {
  name: 'createFactory',
  example: 'React.createFactory(\'div\'); // String;\n\nReact.createFactory(MyComponentClass); // ReactClass type',
  reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.createfactory'
}, {
  name: 'isValidElement',
  example: 'React.isValidElement(MyComponent);',
  reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement'
}, {
  name: 'Children.map',
  example: 'React.Children.map(this.props.children, (child, i) => {\n    return child;\n})',
  reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.children.map'
}, {
  name: 'Children.forEach',
  example: 'React.Children.forEach(this.props.children, (child, i) => {\n  console.log(child + \' at index: \' + i);\n})',
  reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.children.foreach'
}, {
  name: 'Children.count',
  example: 'React.Children.count(this.props.children);',
  reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.children.count'
}, {
  name: 'Children.only',
  example: 'none',
  reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.children.only'
}, {
  name: 'Children.toArray',
  example: 'none',
  reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.children.toarray'
}];

exports['default'] = (0, _assignSharedDefaults2['default'])(data, { module: 'react', color: '#ffdc00' });
module.exports = exports['default'];