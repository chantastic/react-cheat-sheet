import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "render",
    example: `render() {
  return <div />;
}`,
    reference: "https://facebook.github.io/react/docs/react-component.html#render",
  },
  {
    name: "displayName",
    example: `displayName: "MyComponent"`,
    reference: "https://facebook.github.io/react/docs/react-component.html#displayname",
  },
];

export default extendWithDefaults(data, {
  module: "react",
  category: "SPEC",
});
