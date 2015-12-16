import extendWithDefaults from "../assignSharedDefaults";

import { purple } from "../colors";

const data = [
  {
    name: "render",
    example: `ReactDOM.render(<MyComponent />, document.getElementById('MyComponent'));`,
    reference: "http://facebook.github.io/react/docs/top-level-api.html#reactdom.render",
  },
  {
    name: "findDOMNode",
    example: `ReactDOM.findDOMNode(componentRef);`,
    reference: "http://facebook.github.io/react/docs/top-level-api.html#reactdom.finddomnode",
  },
  {
    name: "unmountComponentAtNode",
    example: `ReactDOM.unmountComponentAtNode(document.getElementById('MyComponent'))`,
    reference: "http://facebook.github.io/react/docs/top-level-api.html#reactdom.unmountcomponentatnode",
  },
];

export default extendWithDefaults(data, {
  module: "react-dom",
  color: purple,
  category: "REACTDOM",
});
