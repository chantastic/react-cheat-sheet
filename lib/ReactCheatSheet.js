'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _lodashFilter = require('lodash.filter');

var _lodashFilter2 = _interopRequireDefault(_lodashFilter);

var _dataJs = require('./data.js');

var _dataJs2 = _interopRequireDefault(_dataJs);

var _ReferenceItemJs = require('./ReferenceItem.js');

var _ReferenceItemJs2 = _interopRequireDefault(_ReferenceItemJs);

function filterResults(predicate, _data) {
  return (0, _lodashFilter2['default'])(_data, function (_ref) {
    var name = _ref.name;

    return name.match(new RegExp(predicate, 'i'));
  });
}

var inputStyle = {
  width: "50%",
  padding: 10,
  fontSize: "1em",
  borderRadius: 2,
  border: "1px solid #aaa",
  color: "black"
};

var ReactCheatSheet = (function (_Component) {
  _inherits(ReactCheatSheet, _Component);

  function ReactCheatSheet(props) {
    var _this = this;

    _classCallCheck(this, ReactCheatSheet);

    _get(Object.getPrototypeOf(ReactCheatSheet.prototype), 'constructor', this).call(this, props);

    this.state = {
      predicate: ''
    };

    this.handleChange = function () {
      _this.setState({ predicate: _this.searchInput.getDOMNode().value });
    };
  }

  _createClass(ReactCheatSheet, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var noResults = function noResults() {
        return _react2['default'].createElement(
          'article',
          { style: _extends({}, _styles.article) },
          _react2['default'].createElement(
            'h2',
            null,
            'No results'
          )
        );
      };

      var results = function results() {
        return _this2.filteredResults.map(_ReferenceItemJs2['default']);
      };

      return _react2['default'].createElement(
        'main',
        null,
        _react2['default'].createElement(
          'label',
          null,
          _react2['default'].createElement('input', {
            autoFocus: true,
            type: 'text',
            style: inputStyle,
            placeholder: 'Filter by name',
            value: this.state.predicate,
            ref: function (c) {
              return _this2.searchInput = c;
            },
            onChange: this.handleChange
          }),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'small',
              { style: { color: "#999" } },
              '* using case-insensitive regex match'
            )
          )
        ),
        _react2['default'].createElement(
          'section',
          null,
          this.filteredResults.length ? results() : noResults()
        )
      );
    }
  }, {
    key: 'filteredResults',
    get: function get() {
      return filterResults(this.state.predicate, _dataJs2['default']);
    }
  }]);

  return ReactCheatSheet;
})(_react.Component);

exports['default'] = ReactCheatSheet;
module.exports = exports['default'];