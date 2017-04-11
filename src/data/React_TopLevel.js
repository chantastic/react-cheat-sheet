import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "Component",
    example: `class MyComponent extends React.Component {
  render() {
    return <div />;
  }
}
`,
    reference: "https://facebook.github.io/react/docs/react-api.html#react.component",
  },
  {
    name: "PureComponent",
    example: `class MyComponent extends React.PureComponent {
  render() {
    // only updates props and state have not changed.
    // uses a shallow compare.

    return <div />;
  }
}
`,
    reference: "https://facebook.github.io/react/docs/react-api.html#react.purecomponent",
  },
  {
    name: "createElement",
    example: `React.createElement('div', props, children); // tag name

React.createElement(MyComponent, props, children); // React Component type`,
    reference: "https://facebook.github.io/react/docs/react-api.html#createelement",
  },
  {
    name: "cloneElement",
    example: `React.cloneElement(element, props, ...children);`,
    reference: "https://facebook.github.io/react/docs/react-api.html#cloneelement",
  },
  {
    name: "createFactory",
    example: `React.createFactory('div'); // tag name;

React.createFactory(MyComponentClass); // React Component type`,
    reference: "https://facebook.github.io/react/docs/react-api.html#createfactory",
  },
  {
    name: "isValidElement",
    example: `React.isValidElement(MyComponent);`,
    reference: "https://facebook.github.io/react/docs/react-api.html#isvalidelement",
  },
  {
    name: "Children.map",
    example: `React.Children.map(this.props.children, (child, i) => {
    return child;
})`,
    reference: "https://facebook.github.io/react/docs/react-api.html#react.children.map",
  },
  {
    name: "Children.forEach",
    example: `React.Children.forEach(this.props.children, (child, i) => {
  console.log(child + ' at index: ' + i);
})`,
    reference: "https://facebook.github.io/react/docs/react-api.html#react.children.foreach",
  },
  {
    name: "Children.count",
    example: `React.Children.count(this.props.children);`,
    reference: "https://facebook.github.io/react/docs/react-api.html#react.children.count",
  },
  {
    name: "Children.only",
    example: `React.Children.only(this.props.children);`,
    reference: "https://facebook.github.io/react/docs/react-api.html#react.children.only",
  },
  {
    name: "Children.toArray",
    example: `React.Children.toArray(this.props.children)`,
    reference: "https://facebook.github.io/react/docs/react-api.html#react.children.toarray",
  },
];

export default extendWithDefaults(data, {
  module: "react",
  category: "TOPLEVEL",
});
