'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assignSharedDefaults = require('../assignSharedDefaults');

var _assignSharedDefaults2 = _interopRequireDefault(_assignSharedDefaults);

var data = [{
  name: 'render',
  example: 'ReactDOM.render(<MyComponent />, document.getElementById(\'MyComponent\');',
  reference: 'http://facebook.github.io/react/docs/top-level-api.html#reactdom.render'
}, {
  name: 'findDOMNode',
  example: 'ReactDOM.findDOMNode(componentRef);',
  reference: 'http://facebook.github.io/react/docs/top-level-api.html#reactdom.finddomnode'
}, {
  name: 'unmountComponentAtNode',
  example: 'ReactDOM.unmountComponentAtNode(document.getElementById(\'MyComponent\'))',
  reference: 'http://facebook.github.io/react/docs/top-level-api.html#reactdom.unmountcomponentatnode'
}];

exports['default'] = (0, _assignSharedDefaults2['default'])(data, { module: 'react-dom', color: '#85144b' });
module.exports = exports['default'];