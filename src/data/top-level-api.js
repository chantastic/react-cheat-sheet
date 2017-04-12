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
];

export default extendWithDefaults(data, {
  module: "react",
  category: "Top level API",
});
