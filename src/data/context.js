import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "Context (example)",
    example: `// requires 'prop-types' library

import { string } from "prop-types";

class Cowboy extends React.Component {
  childContextTypes: {
    salutation: string
  }

  getChildContext() {
    return { salutation: "Howdy" };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

const Greeting = (props, context) =>
  <div>{context.salutation} {props.name}.</div>

Greeting.contextTypes = {
  salutation: PropTypes.string
}

// <Greeting name="Michael" />
// => Michael.

// <Cowboy><Greeting name="Michael" /></Cowboy>
// => Howdy Michael.
`,
    reference: "https://facebook.github.io/react/docs/context.html",
  },
  {
    name: "contextTypes",
    example: `// add to the context-aware component
// requires 'prop-types' library

contextTypes: {
  color: PropTypes.string
},`,
    reference: "https://facebook.github.io/react/docs/context.html",
  },
  {
    name: "childContextTypes",
    example: `// add to the context provider
// requires 'prop-types' library

childContextTypes: {
  color: PropTypes.string
},`,
    reference: "https://facebook.github.io/react/docs/context.html",
  },
  {
    name: "getChildContext",
    example: `// add to the context provider

getChildContext() {
  return {color: "purple"};
}`,
    reference: "https://facebook.github.io/react/docs/context.html",
  },
];

export default extendWithDefaults(data, {
  module: "react",
  category: "Context",
});
