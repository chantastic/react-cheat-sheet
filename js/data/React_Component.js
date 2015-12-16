import extendWithDefaults from '../assignSharedDefaults';

import { blue } from '../colors';

const data = [
  {
    name: 'setState',
    example: `// object usage
this.setState({someKey: 'a new value'});

// function usage
this.setState(function(previousState, currentProps) {
  return {counter: previousState.counter + 1};
});

// both uses take a function as an optional second argument.
// this function fires after setState
`,
    reference: 'https://facebook.github.io/react/docs/component-api.html#setstate',
  },
  {
    name: 'replaceState',
    example: `// Like setState but replaces state object instead of merging

// (before)
// state => { firstName: 'Michael', lastName: 'Chan' }

this.replaceState({firstName: 'Spazz'});

// (after)
// this.state => { firstName: 'Spazz' }`,
    reference: 'https://facebook.github.io/react/docs/component-api.html#replacestate',
    notAvailableInComponentClass: true,
  },
  {
    name: 'forceUpdate',
    example: `this.forceUpdate();

// forces component tree to update.
// AVOID where posible`,
    reference: 'https://facebook.github.io/react/docs/component-api.html#forceupdate',
  },
  {
    name: 'getDOMNode',
    example: `// Deprecated. Use ReactDOM.findDOMNode`,
    reference: 'https://facebook.github.io/react/docs/component-api.html#getdomnode',
  },
  {
    name: 'isMounted',
    example: `this.isMounted();`,
    reference: 'https://facebook.github.io/react/docs/component-api.html#ismounted',
    notAvailableInComponentClass: true,
  },
  {
    name: 'setProps',
    example: `this.setProps({someKey: 'a new value'});

// Only available on root-level components
// Prefer calling ReactDOM.render() again`,
    reference: 'https://facebook.github.io/react/docs/component-api.html#setprops',
    notAvailableInComponentClass: true,
  },
  {
    name: 'replaceProps',
    example: `// Like setProps but replaces props object instead of merging

this.replaceProps({someKey: 'a new value'}); `,
    reference: 'https://facebook.github.io/react/docs/component-api.html#replaceprops',
    notAvailableInComponentClass: true,
  },
];

export default extendWithDefaults(data, {
  module: 'react',
  color: blue,
  category: 'COMPONENT',
});
