import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "render",
    example: `render: function () {
  return <div />;
}`,
    reference: "http://facebook.github.io/react/docs/component-specs.html#render",
  },
  {
    name: "getInitialState",
    example: `getInitialState: function () {
  return { key: value };
}`,
    reference: "http://facebook.github.io/react/docs/component-specs.html#getinitialstate",
    notSupported: "React.Component",
  },
  {
    name: "getDefaultProps",
    example: `getDefaultProps: function () {
  return { key: value };
}`,
    reference: "http://facebook.github.io/react/docs/component-specs.html#getdefaultprops",
    notSupported: "React.Component",
  },
  {
    name: "propTypes",
    example: `propTypes: {
  myProp: React.PropTypes.bool
}`,
    reference: "http://facebook.github.io/react/docs/component-specs.html#proptypes",
    notSupported: "React.Component",
  },
  {
    name: "mixins",
    example: `mixins: [ AMixinObject, AnotherMixinObject ];`,
    reference: "http://facebook.github.io/react/docs/component-specs.html#mixins",
    notSupported: "React.Component",
  },
  {
    name: "statics",
    example: `statics: {
  customMethod: function(foo) {
    return foo === 'bar';
  }
}`,
    reference: "http://facebook.github.io/react/docs/component-specs.html#statics",
    notSupported: "React.Component",
  },
  {
    name: "displayName",
    example: `displayName: "MyComponent"`,
    reference: "http://facebook.github.io/react/docs/component-specs.html#displayname",
  },
];

export default extendWithDefaults(data, {
  module: "react",
  category: "SPEC",
});
