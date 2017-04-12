import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "renderToString",
    example: `import { renderToString } from "react-dom/server";
ReactDOMServer.renderToString(<MyComponent />);`,
    reference: `https://facebook.github.io/react/docs/react-dom.html#unmountcomponentatnode`,
  },
  {
    name: "renderToStaticMarkup",
    example: `import {renderToStaticMarkup} from "react-dom/server";
renderToStaticMarkup(<MyComponent />);`,
    reference: "http://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostaticmarkup",
  },
];

export default extendWithDefaults(data, {
  module: "react-dom/server",
  category: "react-dom",
});
