import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "setState",
    example: `// object usage
this.setState({someKey: 'a new value'});

// function usage
this.setState(function(previousState, currentProps) {
  return {counter: previousState.counter + 1};
});

// both uses take a function as an optional second argument.
// this function fires after setState
`,
    reference: "https://facebook.github.io/react/docs/component-api.html#setstate",
  },
  {
    name: "replaceState",
    example: `// Like setState but replaces state object instead of merging

// (before)
// state => { firstName: 'Michael', lastName: 'Chan' }

this.replaceState({firstName: 'Spazz'});

// (after)
// this.state => { firstName: 'Spazz' }`,
    reference: "https://facebook.github.io/react/docs/component-api.html#replacestate",
    notSupported: "React.Component",
  },
  {
    name: "forceUpdate",
    example: `this.forceUpdate();

// forces component tree to update.
// AVOID where posible`,
    reference: "https://facebook.github.io/react/docs/component-api.html#forceupdate",
  },
  {
    name: "isMounted",
    example: `this.isMounted();`,
    reference: "https://facebook.github.io/react/docs/component-api.html#ismounted",
    notSupported: "React.Component",
  },
];

export default extendWithDefaults(data, {
  module: "react",
  category: "COMPONENT",
});
