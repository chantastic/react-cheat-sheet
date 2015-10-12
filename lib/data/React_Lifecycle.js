'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assignSharedDefaults = require('../assignSharedDefaults');

var _assignSharedDefaults2 = _interopRequireDefault(_assignSharedDefaults);

var data = [{
  name: 'componentWillMount',
  example: 'componentWillMount: function () {\n  // invoked once, before initial \'render\'\n}',
  reference: 'http://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount'
}, {
  name: 'componentDidMount',
  example: 'componentDidMount: function () {\n  // invoked once (client-only), after initial \'render\'\n  // good for AJAX, setTimeout, setInterval\n}',
  reference: 'http://facebook.github.io/react/docs/component-specs.html#mounting-componentdidmount'
}, {
  name: 'componentWillReceiveProps',
  example: 'componentWillReceiveProps: function (nextProps) {\n  // invoked when component is receiving props, not for initial \'render\'\n}',
  reference: 'http://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops'
}, {
  name: 'shouldComponentUpdate',
  example: 'shouldComponentUpdate: function (nextProps, nextState) {\n  // invoked before rendering with new props, not for initial \'render\'\n}',
  reference: 'http://facebook.github.io/react/docs/component-specs.html#updating-shouldcomponentupdate'
}, {
  name: 'componentWillUpdate',
  example: 'componentWillUpdate: function (nextProps, nextState) {\n  // invoked immediately before rendering with new props or state, not for initial \'render\'\n  // CANNOT CALL setState(). see componentWillReceiveProps\n}',
  reference: 'http://facebook.github.io/react/docs/component-specs.html#updating-componentwillupdate'
}, {
  name: 'componentDidUpdate',
  example: 'componentDidUpdate: function (nextProps, nextState) {\n  // invoked immediately after DOM updates, not for initial \'render\'\n}',
  reference: 'http://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate'
}, {
  name: 'componentWillUnmount',
  example: 'componentWillUnmount: function () {\n  // invoked immediately before a component is unmounted from the DOM\n}',
  reference: 'http://facebook.github.io/react/docs/component-specs.html#unmounting-componentwillunmount'
}];

exports['default'] = (0, _assignSharedDefaults2['default'])(data, { module: 'react', color: '#ff851b' });
module.exports = exports['default'];