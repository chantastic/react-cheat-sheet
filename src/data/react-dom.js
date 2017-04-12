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
    module: "react-dom",
  },
  {
    name: "findDOMNode",
    example: `import { findDOMNode } from "react-dom";

ReactDOM.findDOMNode(componentRef);`,
    reference: "https://facebook.github.io/react/docs/react-dom.html#finddomnode",
    module: "react-dom",
  },
  {
    name: "unmountComponentAtNode",
    example: `import { unmountComponentAtNode } from "react-dom";

ReactDOM.unmountComponentAtNode(document.getElementById('MyComponent'))`,
    reference: "https://facebook.github.io/react/docs/react-dom.html#unmountcomponentatnode",
    module: "react-dom",
  },
  {
    name: "renderToString",
    example: `import { renderToString } from "react-dom/server";
ReactDOMServer.renderToString(<MyComponent />);`,
    reference: `https://facebook.github.io/react/docs/react-dom.html#unmountcomponentatnode`,
    module: "react-dom/server",
  },
  {
    name: "renderToStaticMarkup",
    example: `import {renderToStaticMarkup} from "react-dom/server";
renderToStaticMarkup(<MyComponent />);`,
    reference: "http://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostaticmarkup",
    module: "react-dom/server",
  },
];

export default extendWithDefaults(data, {
  category: "react-dom",
});
