'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assignSharedDefaults = require('../assignSharedDefaults');

var _assignSharedDefaults2 = _interopRequireDefault(_assignSharedDefaults);

var data = [{
  name: 'render',
  example: 'render: function () {\n  return <div />;\n}',
  reference: 'http://facebook.github.io/react/docs/component-specs.html#render'
}, {
  name: 'getInitialState',
  example: 'getInitialState: function () {\n  return { key: value };\n}\n\n// not available with React.Component',
  reference: 'http://facebook.github.io/react/docs/component-specs.html#getinitialstate'
}, {
  name: 'getDefaultProps',
  example: 'getDefaultProps: function () {\n  return { key: value };\n}\n\n// not available with React.Component',
  reference: 'http://facebook.github.io/react/docs/component-specs.html#getdefaultprops'
}, {
  name: 'propTypes',
  example: 'propTypes: function () {\n  myProp: React.PropTypes.bool\n}\n\n// not available with React.Component',
  reference: 'http://facebook.github.io/react/docs/component-specs.html#proptypes'
}, {
  name: 'mixins',
  example: 'mixins: [ AMixinObject, AnotherMixinObject ];\n\n// not available in React.Component',
  reference: 'http://facebook.github.io/react/docs/component-specs.html#mixins'
}, {
  name: 'statics',
  example: 'statics: {\n  customMethod: function(foo) {\n    return foo === \'bar\';\n  }\n}',
  reference: 'http://facebook.github.io/react/docs/component-specs.html#statics'
}, {
  name: 'displayName',
  example: 'displayName: "MyComponent"',
  reference: 'http://facebook.github.io/react/docs/component-specs.html#displayname'
}];

exports['default'] = (0, _assignSharedDefaults2['default'])(data, { module: 'react', color: '#3d9970' });
module.exports = exports['default'];