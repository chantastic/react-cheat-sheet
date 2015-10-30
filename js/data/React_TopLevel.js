import extendWithDefaults from '../assignSharedDefaults';

const data = [
  {
    name: 'Component',
    example: `// ES2015

class MyComponent extends React.Component {
  render () {
    return <div />;
  }
}
`,
    reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.component',
  },
  {
    name: 'createClass',
    example: `var MyComponent = React.createClass({
  render: function () {
    return <div />;
  }
});`,
    reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.createclass',
  },
  {
    name: 'createElement',
    example: `React.createElement('div', props, ...children); // String

React.createElement(MyComponent, props, ...children); // ReactClass type`,
    reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.createelement',
  },
  {
    name: 'cloneElement',
    example: `React.cloneElement(element, props, ...children);`,
    reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.cloneelement',
  },
  {
    name: 'createFactory',
    example: `React.createFactory('div'); // String;

React.createFactory(MyComponentClass); // ReactClass type`,
    reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.createfactory',
  },
  {
    name: 'isValidElement',
    example: `React.isValidElement(MyComponent);`,
    reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement',
  },
  {
    name: 'Children.map',
    example: `React.Children.map(this.props.children, (child, i) => {
    return child;
})`,
    reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.children.map',
  },
  {
    name: 'Children.forEach',
    example: `React.Children.forEach(this.props.children, (child, i) => {
  console.log(child + ' at index: ' + i);
})`,
    reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.children.foreach',
  },
  {
    name: 'Children.count',
    example: `React.Children.count(this.props.children);`,
    reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.children.count',
  },
  {
    name: 'Children.only',
    example: `none`,
    reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.children.only',
  },
  {
    name: 'Children.toArray',
    example: `none`,
    reference: 'http://facebook.github.io/react/docs/top-level-api.html#react.children.toarray',
  }
];

export default extendWithDefaults(data, { module: 'react', color: '#ffdc00' });
