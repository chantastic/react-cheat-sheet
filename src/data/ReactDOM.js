function withSharedData (raw) {
  return raw.map(el => Object.assign(
    {},
    {
      module: 'react-dom'
    },
    el
  ));
}

const data = [
  {
    name: 'render',
    example: `ReactDOM.render(<MyComponent />, document.getElementById('MyComponent');`
  },
  {
    name: 'findDOMNode',
    example: `ReactDOM.findDOMNode(componentRef);`,
    reference: 'https://facebook.github.io/react/docs/working-with-the-browser.html#refs-and-finddomnode',
  },
  {
    name: 'unmountComponentAtNode',
    example: `ReactDOM.unmountComponentAtNode(document.getElementById('MyComponent'))`,
    reference: 'https://facebook.github.io/react/docs/top-level-api.html#react.unmountcomponentatnode',
  },
];

export default withSharedData(data);
