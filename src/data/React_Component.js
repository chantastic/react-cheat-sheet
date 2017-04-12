import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "setState (object)",
    example: `// good for static values

this.setState({mykey: 'my new value'});`,
    reference: "https://facebook.github.io/react/docs/react-component.html#setstate",
  },
  {
    name: "setState (function)",
    example: `// good for state transitions

this.setState((prevState, props) => {
  return {count: prevState.count + props.step};
});`,
    reference: "https://facebook.github.io/react/docs/react-component.html#setstate",
  },
  {
    name: "setState (optional callback)",
    example: `// fires after setState
// prefer componentDidUpdate

this.setState(
  (prevState, props) => ({ count: prevState.count + props.step }),
  () => console.log(this.state.count)
);`,
    reference: "https://facebook.github.io/react/docs/react-component.html#setstate",
  },
  {
    name: "forceUpdate",
    example: `// forces a re-render; AVOID if possible

this.forceUpdate();`,
    reference: "https://facebook.github.io/react/docs/react-component.html#forceupdate",
  },
];

export default extendWithDefaults(data, {
  module: "react",
  category: "Component",
});
