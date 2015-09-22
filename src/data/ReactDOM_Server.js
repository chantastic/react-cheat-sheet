function withSharedData (raw) {
  return raw.map(el => Object.assign(
    {},
    {
      module: 'react-dom/server'
    },
    el
  ));
}

const data = [
  {
    name: 'renderToString',
    example: `ReactDOMServer.renderToString(<MyComponent />);`,
    reference: `https://facebook.github.io/react/docs/top-level-api.html#react.rendertostring`,
  },
  {
    name: 'renderStaticMarkup',
    example: `ReactDOMServer.renderToStaticMarkup(<MyComponent />);`,
    reference: 'https://facebook.github.io/react/docs/top-level-api.html#react.rendertostaticmarkup',
  },
];

export default withSharedData(data);
