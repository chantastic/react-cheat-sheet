import extendWithDefaults from '../assignSharedDefaults';

const data = [
  {
    name: 'render',
    example: `render: function () {
  return <div />;
}`,
    reference: 'http://facebook.github.io/react/docs/component-specs.html#render',
  },
  {
    name: 'getInitialState',
    example: `getInitialState: function () {
  return { key: value };
}`,
    reference: 'http://facebook.github.io/react/docs/component-specs.html#getinitialstate',
    notAvailableInComponentClass: true,
  },
  {
    name: 'getDefaultProps',
    example: `getDefaultProps: function () {
  return { key: value };
}`,
    reference: 'http://facebook.github.io/react/docs/component-specs.html#getdefaultprops',
    notAvailableInComponentClass: true,
  },
  {
    name: 'propTypes',
    example: `propTypes: {
  myProp: React.PropTypes.bool
}`,
    reference: 'http://facebook.github.io/react/docs/component-specs.html#proptypes',
    notAvailableInComponentClass: true,
  },
  {
    name: 'mixins',
    example: `mixins: [ AMixinObject, AnotherMixinObject ];`,
    reference: 'http://facebook.github.io/react/docs/component-specs.html#mixins',
    notAvailableInComponentClass: true,
  },
  {
    name: 'statics',
    example: `statics: {
  customMethod: function(foo) {
    return foo === 'bar';
  }
}`,
    reference: 'http://facebook.github.io/react/docs/component-specs.html#statics',
  },
  {
    name: 'displayName',
    example: `displayName: "MyComponent"`,
    reference: 'http://facebook.github.io/react/docs/component-specs.html#displayname',
  },
];

export default extendWithDefaults(data, { module: 'react', color: '#3d9970' });
