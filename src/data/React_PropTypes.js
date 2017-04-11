import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "PropTypes.array",
    example: `import { array } from "prop-types";

MyComponent.propTypes = {
  optionalArray: array,
  requiredArray: array.isRequired
}`,
  },
  {
    name: "PropTypes.bool",
    example: `import { bool } from "prop-types";

MyComponent.propTypes = {
  optionalBoolean: bool,
  requiredBoolean: bool.isRequired
}`,
  },
  {
    name: "PropTypes.func",
    example: `import { func } from "prop-types";

MyComponent.propTypes = {
  optionalFunction: func,
  requiredFunction: func.isRequired
}`,
  },
  {
    name: "PropTypes.number",
    example: `import { number } from "prop-types";

MyComponent.propTypes = {
  optionalNumber: number,
  requiredNumber: number.isRequired
}`,
  },
  {
    name: "PropTypes.object",
    example: `import { object } from "prop-types";

MyComponent.propTypes = {
  optionalObject: object,
  requiredObject: object.isRequired
}`,
  },
  {
    name: "PropTypes.string",
    example: `import { string } from "prop-types";

MyComponent.propTypes = {
  optionalString: string,
  requiredString: string.isRequired
}`,
  },
  {
    name: "PropTypes.node",
    example: `import { node } from "prop-types";

MyComponent.propTypes = {
  optionalNode: node,
  requiredNode: node.isRequired
};

// anything that can be rendered`,
  },
  {
    name: "PropTypes.element",
    example: `import { element } from "prop-types";

MyComponent.propTypes = {
  optionalElement: element,
  requiredElement: element.isRequired
}`,
  },
  {
    name: "PropTypes.instanceOf",
    example: `import { instanceOf } from "prop-types";

MyComponent.propTypes = {
  optionalClass: instanceOf(SomeClass),
  requiredClass: instanceOf(SomeClass).isRequired
}`,
  },
  {
    name: "PropTypes.oneOf",
    example: `import { oneOf } from "prop-types";

MyComponent.propTypes = {
  optionalEnum: oneOf(['Thing 1', 'Thing 2']),
  requiredEnum: oneOf(['Thing 1', 'Thing 2']).isRequired
}`,
  },
  {
    name: "PropTypes.oneOfType",
    example: `import { oneOfType, bool, string } from "prop-types";

MyComponent.propTypes = {
  optionalUnion: oneOfType([ bool, string ]),

  requiredUnion: oneOfType([ bool, string ]).isRequired,
}`,
  },
  {
    name: "PropTypes.arrayOf",
    example: `import { arrayOf, string } from "prop-types";

MyComponent.propTypes = {
  optionalArrayOfStrings: arrayOf(string),
  requiredArrayOfStrings: arrayOf(string).isRequired
}`,
  },
  {
    name: "PropTypes.objectOf",
    example: `import { objectOf, string } from "prop-types";

MyComponent.propTypes = {
  optionalObjectOfStrings: objectOf(string),
  requiredObjectOfStrings: objectOf(string).isRequired
}`,
  },
  {
    name: "PropTypes.shape",
    example: `
import { number, shape, string } from "prop-types";

MyComponent.propTypes = {
  optionalObjectWithShape: shape({
    age: number,
    name: string
  }),

  requiredObjectWithShape: shape({
    age: number,
    name: string
  }).isRequired,

  requiredObjectWithRequiredShape: shape({
    age: number.isRequired,
    name: string.isRequired
  }).isRequired,
}`,
  },
  {
    name: "PropTypes.any",
    example: `import { any } from "prop-types";

MyComponent.propTypes = {
  requiredAny: any.isRequired
}`,
  },
];

export default extendWithDefaults(data, {
  module: "prop-types",
  category: "PROPTYPES",
  reference: "https://facebook.github.io/react/docs/typechecking-with-proptypes.html#react.proptypes",
});
