import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "render",
    example: `import { render } from "react-dom";

render(
  <MyComponent />,
  document.getElementById("component-root")
);`,
    reference: "https://facebook.github.io/react/docs/react-dom.html#render",
  },
  {
    name: "findDOMNode",
    example: `import { findDOMNode } from "react-dom";

ReactDOM.findDOMNode(componentRef);`,
    reference: "https://facebook.github.io/react/docs/react-dom.html#finddomnode",
  },
  {
    name: "unmountComponentAtNode",
    example: `import { unmountComponentAtNode } from "react-dom";

ReactDOM.unmountComponentAtNode(document.getElementById('MyComponent'))`,
    reference: "https://facebook.github.io/react/docs/react-dom.html#unmountcomponentatnode",
  },
];

export default extendWithDefaults(data, {
  module: "react-dom",
  category: "react-dom",
});
