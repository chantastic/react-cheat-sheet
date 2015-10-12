'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assignSharedDefaults = require('../assignSharedDefaults');

var _assignSharedDefaults2 = _interopRequireDefault(_assignSharedDefaults);

var data = [{
  name: 'renderToString',
  example: 'ReactDOMServer.renderToString(<MyComponent />);',
  reference: 'http://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostring'
}, {
  name: 'renderStaticMarkup',
  example: 'ReactDOMServer.renderToStaticMarkup(<MyComponent />);',
  reference: 'http://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostaticmarkup'
}];

exports['default'] = (0, _assignSharedDefaults2['default'])(data, { module: 'react-dom', color: '#85144b' });
module.exports = exports['default'];