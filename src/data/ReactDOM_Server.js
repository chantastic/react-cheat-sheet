import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "renderToString",
    example: `ReactDOMServer.renderToString(<MyComponent />);`,
    reference: `http://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostring`,
  },
  {
    name: "renderToStaticMarkup",
    example: `ReactDOMServer.renderToStaticMarkup(<MyComponent />);`,
    reference: "http://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostaticmarkup",
  },
];

export default extendWithDefaults(data, {
  module: "react-dom",
  category: "REACTDOM",
});
