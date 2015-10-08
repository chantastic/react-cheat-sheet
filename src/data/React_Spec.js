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
}

// not available with React.Component`,
    reference: 'http://facebook.github.io/react/docs/component-specs.html#getinitialstate',
  },
  {
    name: 'getDefaultProps',
    example: `getDefaultProps: function () {
  return { key: value };
}

// not available with React.Component`,
    reference: 'http://facebook.github.io/react/docs/component-specs.html#getdefaultprops',
  },
  {
    name: 'propTypes',
    example: `propTypes: function () {
  myProp: React.PropTypes.bool
}

// not available with React.Component`,
    reference: 'http://facebook.github.io/react/docs/component-specs.html#proptypes',
  },
  {
    name: 'mixins',
    example: `mixins: [ AMixinObject, AnotherMixinObject ];

// not available in React.Component`,
    reference: 'http://facebook.github.io/react/docs/component-specs.html#mixins',
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
