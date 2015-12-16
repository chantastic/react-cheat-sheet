import extendWithDefaults from '../assignSharedDefaults';

import { pink } from '../colors';

const data = [
  {
    name: 'PropTypes.array',
    example: `{
  optionalArray: React.PropTypes.array,
  requiredArray: React.PropTypes.array.isRequired
}`,
  },
  {
    name: 'PropTypes.bool',
    example: `{
  optionalBoolean: React.PropTypes.bool,
  requiredBoolean: React.PropTypes.bool.isRequired
}`,
  },
  {
    name: 'PropTypes.func',
    example: `{
  optionalFunction: React.PropTypes.func,
  requiredFunction: React.PropTypes.func.isRequired
}`,
  },
  {
    name: 'PropTypes.number',
    example: `{
  optionalNumber: React.PropTypes.number,
  requiredNumber: React.PropTypes.number.isRequired
}`,
  },
  {
    name: 'PropTypes.object',
    example: `{
  optionalObject: React.PropTypes.object,
  requiredObject: React.PropTypes.object.isRequired
}`,
  },
  {
    name: 'PropTypes.string',
    example: `{
  optionalString: React.PropTypes.string,
  requiredString: React.PropTypes.string.isRequired
}`,
  },
  {
    name: 'PropTypes.node',
    example: `{
  optionalNode: React.PropTypes.node,
  requiredNode: React.PropTypes.node.isRequired
};

// anything that can be rendered`,
  },
  {
    name: 'PropTypes.element',
    example: `{
  optionalElement: React.PropTypes.element,
  requiredElement: React.PropTypes.element.isRequired
}`,
  },
  {
    name: 'PropTypes.instanceOf',
    example: `{
  optionalClass: React.PropTypes.instanceOf(MyClass),
  requiredClass: React.PropTypes.instanceOf(MyClass).isRequired
}`,
  },
  {
    name: 'PropTypes.oneOf',
    example: `{
  optionalEnum: React.PropTypes.oneOf(['Thing 1', 'Thing 2']),
  optionalEnum: React.PropTypes.oneOf(['Thing 1', 'Thing 2']).isRequired
}`,
  },
  {
    name: 'PropTypes.oneOfType',
    example: `{
  optionalUnion: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string
  ]),

  requiredUnion: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string
  ]).isRequired,
}`,
  },
  {
    name: 'PropTypes.arrayOf',
    example: `{
  optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.string),
  requiredArrayOf: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
}`,
  },
  {
    name: 'PropTypes.objectOf',
    example: `{
  optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.string),
  requiredObjectOf: React.PropTypes.objectOf(React.PropTypes.string).isRequired
}

// Type of property values`,
  },
  {
    name: 'PropTypes.shape',
    example: `{
  optionalObjectWithShape: React.PropTypes.shape({
    age: React.PropTypes.number,
    name: React.PropTypes.string
  }),

  requiredObjectWithShape: React.PropTypes.shape({
    age: React.PropTypes.number,
    name: React.PropTypes.string
  }).isRequired,

  requiredObjectWithRequiredShape: React.PropTypes.shape({
    age: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired
  }).isRequired,
}`,
  },
  {
    name: 'PropTypes.any',
    example: `{
  requiredAny: React.PropTypes.any.isRequired
}`,
  },
];

export default extendWithDefaults(data, {
  module: 'react',
  color: pink,
  category: 'PROPTYPES',
  reference: 'https://facebook.github.io/react/docs/reusable-components.html#prop-validation',
});
