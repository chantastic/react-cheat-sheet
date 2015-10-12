'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _vendorPrism = require('./vendor/Prism');

var _vendorPrism2 = _interopRequireDefault(_vendorPrism);

var styles = {
  root: _extends({}, _styles.article, {
    borderBottom: '1px solid #333'
  }),
  header: {
    overflowY: 'scroll'
  },
  module: {
    marginLeft: '.5em',
    fontSize: '1em',
    color: '#aaa',
    fontWeight: 'normal'
  },
  example: {
    position: 'relative',
    overflow: 'hidden',
    overflowX: 'scroll',
    backgroundColor: 'rgb(40, 44, 52)',
    color: 'white',
    padding: 20,
    borderRadius: 2
  },
  exampleColorCode: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: 4
  },
  code: {
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace"
  },
  reference: {
    textAlign: 'right'
  }
};

var ReferenceItem = function ReferenceItem(_ref) {
  var name = _ref.name;
  var module = _ref.module;
  var href = _ref.reference;
  var example = _ref.example;
  var backgroundColor = _ref.color;
  return _react2['default'].createElement(
    'article',
    { style: styles.root },
    _react2['default'].createElement(
      'h2',
      { style: styles.header },
      name,
      _react2['default'].createElement(
        'span',
        { style: styles.module },
        module
      )
    ),
    _react2['default'].createElement(
      'pre',
      { style: styles.example },
      _react2['default'].createElement(
        'code',
        { style: styles.code },
        _react2['default'].createElement(
          _vendorPrism2['default'],
          null,
          example
        )
      ),
      _react2['default'].createElement('div', { style: _extends({ backgroundColor: backgroundColor }, styles.exampleColorCode) })
    ),
    _react2['default'].createElement(
      'div',
      { style: styles.reference },
      href && _react2['default'].createElement(
        'a',
        { href: href, target: '_blank' },
        'Read more →'
      )
    )
  );
};

exports['default'] = ReferenceItem;
module.exports = exports['default'];