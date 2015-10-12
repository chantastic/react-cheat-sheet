'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assignSharedDefaults = require('../assignSharedDefaults');

var _assignSharedDefaults2 = _interopRequireDefault(_assignSharedDefaults);

var data = [{
  name: 'PropTypes.array',
  example: '{\n  optionalArray: React.PropTypes.array,\n  requiredArray: React.PropTypes.array.isRequired\n}'
}, {
  name: 'PropTypes.bool',
  example: '{\n  optionalBoolean: React.PropTypes.bool,\n  requiredBoolean: React.PropTypes.bool.isRequired\n}'
}, {
  name: 'PropTypes.func',
  example: '{\n  optionalFunction: React.PropTypes.func,\n  requiredFunction: React.PropTypes.func.isRequired\n}'
}, {
  name: 'PropTypes.number',
  example: '{\n  optionalNumber: React.PropTypes.number,\n  requiredNumber: React.PropTypes.number.isRequired\n}'
}, {
  name: 'PropTypes.object',
  example: '{\n  optionalObject: React.PropTypes.object,\n  requiredObject: React.PropTypes.object.isRequired\n}'
}, {
  name: 'PropTypes.string',
  example: '{\n  optionalString: React.PropTypes.string,\n  requiredString: React.PropTypes.string.isRequired\n}'
}, {
  name: 'PropTypes.node',
  example: '{\n  optionalNode: React.PropTypes.node,\n  requiredNode: React.PropTypes.node.isRequired\n};\n\n// anything that can be rendered'
}, {
  name: 'PropTypes.element',
  example: '{\n  optionalElement: React.PropTypes.element,\n  requiredElement: React.PropTypes.element.isRequired\n}'
}, {
  name: 'PropTypes.instanceOf',
  example: '{\n  optionalClass: React.PropTypes.instanceOf(MyClass),\n  requiredClass: React.PropTypes.instanceOf(MyClass).isRequired\n}'
}, {
  name: 'PropTypes.oneOf',
  example: '{\n  optionalEnum: React.PropTypes.oneOf([\'Thing 1\', \'Thing 2\']),\n  optionalEnum: React.PropTypes.oneOf([\'Thing 1\', \'Thing 2\']).isRequired\n}'
}, {
  name: 'PropTypes.oneOfType',
  example: '{\n  optionalUnion: React.PropTypes.oneOfType([\n    React.PropTypes.bool,\n    React.PropTypes.string\n  ]),\n\n  requiredUnion: React.PropTypes.oneOfType([\n    React.PropTypes.bool,\n    React.PropTypes.string\n  ]).isRequired,\n}'
}, {
  name: 'PropTypes.arrayOf',
  example: '{\n  optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.string),\n  requiredArrayOf: React.PropTypes.arrayOf(React.PropTypes.string).isRequired\n}'
}, {
  name: 'PropTypes.objectOf',
  example: '{\n  optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.string),\n  requiredObjectOf: React.PropTypes.objectOf(React.PropTypes.string).isRequired\n}\n\n// Type of property values'
}, {
  name: 'PropTypes.shape',
  example: '{\n  optionalObjectWithShape: React.PropTypes.shape({\n    age: React.PropTypes.number,\n    name: React.PropTypes.string\n  }),\n\n  requiredObjectWithShape: React.PropTypes.shape({\n    age: React.PropTypes.number,\n    name: React.PropTypes.string\n  }).isRequired,\n\n  requiredObjectWithRequiredShape: React.PropTypes.shape({\n    age: React.PropTypes.number.isRequired,\n    name: React.PropTypes.string.isRequired\n  }).isRequired,\n}'
}, {
  name: 'PropTypes.any',
  example: '{\n  requiredAny: React.PropTypes.any.isRequired\n}'
}];

exports['default'] = (0, _assignSharedDefaults2['default'])(data, { module: 'react', color: '#f012be', reference: 'https://facebook.github.io/react/docs/reusable-components.html#prop-validation' });
module.exports = exports['default'];