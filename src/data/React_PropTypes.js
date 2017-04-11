import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "PropTypes.array",
    example: `{
  optionalArray: PropTypes.array,
  requiredArray: PropTypes.array.isRequired
}`,
  },
  {
    name: "PropTypes.bool",
    example: `{
  optionalBoolean: PropTypes.bool,
  requiredBoolean: PropTypes.bool.isRequired
}`,
  },
  {
    name: "PropTypes.func",
    example: `{
  optionalFunction: PropTypes.func,
  requiredFunction: PropTypes.func.isRequired
}`,
  },
  {
    name: "PropTypes.number",
    example: `{
  optionalNumber: PropTypes.number,
  requiredNumber: PropTypes.number.isRequired
}`,
  },
  {
    name: "PropTypes.object",
    example: `{
  optionalObject: PropTypes.object,
  requiredObject: PropTypes.object.isRequired
}`,
  },
  {
    name: "PropTypes.string",
    example: `{
  optionalString: PropTypes.string,
  requiredString: PropTypes.string.isRequired
}`,
  },
  {
    name: "PropTypes.node",
    example: `{
  optionalNode: PropTypes.node,
  requiredNode: PropTypes.node.isRequired
};

// anything that can be rendered`,
  },
  {
    name: "PropTypes.element",
    example: `{
  optionalElement: PropTypes.element,
  requiredElement: PropTypes.element.isRequired
}`,
  },
  {
    name: "PropTypes.instanceOf",
    example: `{
  optionalClass: PropTypes.instanceOf(MyClass),
  requiredClass: PropTypes.instanceOf(MyClass).isRequired
}`,
  },
  {
    name: "PropTypes.oneOf",
    example: `{
  optionalEnum: PropTypes.oneOf(['Thing 1', 'Thing 2']),
  optionalEnum: PropTypes.oneOf(['Thing 1', 'Thing 2']).isRequired
}`,
  },
  {
    name: "PropTypes.oneOfType",
    example: `{
  optionalUnion: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),

  requiredUnion: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]).isRequired,
}`,
  },
  {
    name: "PropTypes.arrayOf",
    example: `{
  optionalArrayOf: PropTypes.arrayOf(PropTypes.string),
  requiredArrayOf: PropTypes.arrayOf(PropTypes.string).isRequired
}`,
  },
  {
    name: "PropTypes.objectOf",
    example: `{
  optionalObjectOf: PropTypes.objectOf(PropTypes.string),
  requiredObjectOf: PropTypes.objectOf(PropTypes.string).isRequired
}

// Type of property values`,
  },
  {
    name: "PropTypes.shape",
    example: `{
  optionalObjectWithShape: PropTypes.shape({
    age: PropTypes.number,
    name: PropTypes.string
  }),

  requiredObjectWithShape: PropTypes.shape({
    age: PropTypes.number,
    name: PropTypes.string
  }).isRequired,

  requiredObjectWithRequiredShape: PropTypes.shape({
    age: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
}`,
  },
  {
    name: "PropTypes.any",
    example: `{
  requiredAny: PropTypes.any.isRequired
}`,
  },
];

export default extendWithDefaults(data, {
  module: "react",
  category: "PROPTYPES",
  reference: "https://facebook.github.io/react/docs/reusable-components.html#prop-validation",
});
