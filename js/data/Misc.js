import extendWithDefaults from '../assignSharedDefaults';

import { red } from '../colors';

const data = [
  {
    name: 'Stateless function syntax',
    example: `// ES5
function Greeting(props) {
  return <div>Hello {props.name}</div>;
}

// ES2015
const Greeting = (props) => (
  <div>Hello {props.name}</div>
);`,
    reference: 'https://facebook.github.io/react/docs/reusable-components.html#stateless-functions',
    refsNotAvailable: true,
    module: 'react',
  }
];

export default extendWithDefaults(data, {
  color: red,
  category: 'MISC',
});
