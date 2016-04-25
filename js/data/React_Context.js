import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "contextTypes",
    example: `contextTypes: {
  color: React.PropTypes.string
},`,
    reference: "https://facebook.github.io/react/docs/context.html",
  },
  {
    name: "childContextTypes",
    example: `childContextTypes: {
  color: React.PropTypes.string
},`,
    reference: "https://facebook.github.io/react/docs/context.html",
  },
  {
    name: "getChildContext",
    example: `getChildContext: function() {
  return {color: "purple"};
}`,
    reference: "https://facebook.github.io/react/docs/context.html",
  },
];

export default extendWithDefaults(data, {
  module: "react",
  category: "CONTEXT",
});
