import extendWithDefaults from '../assignSharedDefaults';

import { purple } from '../colors';

const data = [
  {
    name: 'renderToString',
    example: `ReactDOMServer.renderToString(<MyComponent />);`,
    reference: `http://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostring`,
  },
  {
    name: 'renderStaticMarkup',
    example: `ReactDOMServer.renderToStaticMarkup(<MyComponent />);`,
    reference: 'http://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostaticmarkup',
  },
];

export default extendWithDefaults(data, {
  module: 'react-dom',
  color: purple,
  category: 'REACTDOM',
});
