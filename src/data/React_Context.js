import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "Context (example)",
    example: `var Cowboy = React.createClass({
  childContextTypes: {
    greeting: React.PropTypes.string
  },

  getChildContext: function () {
    return { greeting: "Howdy"};
  },

  render: function () {
    return <div>{this.props.children}</div>
  }
});

var Greeting = React.createClass({
  contextTypes: {
    greeting: React.PropTypes.string
  },

  render: function () {
    return <div>{this.context.greeting} {this.props.name}.</div>
  }
});

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

contextTypes: {
  color: React.PropTypes.string
},`,
    reference: "https://facebook.github.io/react/docs/context.html",
  },
  {
    name: "childContextTypes",
    example: `// add to the context provider

childContextTypes: {
  color: React.PropTypes.string
},`,
    reference: "https://facebook.github.io/react/docs/context.html",
  },
  {
    name: "getChildContext",
    example: `// add to the context provider

getChildContext: function() {
  return {color: "purple"};
}`,
    reference: "https://facebook.github.io/react/docs/context.html",
  },
];

export default extendWithDefaults(data, {
  module: "react",
  category: "CONTEXT",
});
