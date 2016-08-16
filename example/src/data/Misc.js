import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "ref (callback)",
    example: `// Accessed as this.myInput
<input ref={(ref) => this.myInput = ref} />
`,
    reference: "https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute",
    notSupported: "Stateless function syntax",
  },
  {
    name: "ref (string)",
    example: `// Accessed as this.refs.myInput
<input ref="myInput" />
`,
    reference: "https://facebook.github.io/react/docs/more-about-refs.html#the-ref-string-attribute",
    notSupported: "Stateless function syntax",
  },
  {
    name: "Stateless function syntax",
    example: `// ES5
function Greeting (props) {
  return <div>Hello {props.name}</div>;
}

// ES2015
const Greeting = (props) => (
  <div>Hello {props.name}</div>
);`,
    reference: "https://facebook.github.io/react/docs/reusable-components.html#stateless-functions",
    notSupported: "ref",
    module: "react",
  },
  {
    name: "Stateless function syntax (with context)",
    example: `// ES5
function Greeting (props, context) {
  return <div>{context.greeting} {props.name}.</div>;
}
Greeting.contextTypes = { greeting: React.PropTypes.string };

// ES2015
const Greeting = (props, context) => (
  <div>Hello {props.name}</div>
);
Greeting.contextTypes = { greeting: React.PropTypes.string };`,
    reference: "https://facebook.github.io/react/docs/context.html#referencing-context-in-stateless-functional-components",
    notSupported: "ref",
    module: "react",
  },
];

export default extendWithDefaults(data, {
  category: "MISC",
});
