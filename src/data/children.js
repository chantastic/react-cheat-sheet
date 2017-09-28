import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "Children.map",
    example: `React.Children.map(this.props.children, (child, i) => {
    return child;
})`,
    reference: "https://reactjs.org/docs/react-api.html#reactchildrenmap",
  },
  {
    name: "Children.forEach",
    example: `React.Children.forEach(this.props.children, (child, i) => {
  console.log(child + ' at index: ' + i);
})`,
    reference: "https://reactjs.org/docs/react-api.html#reactchildrenforeach",
  },
  {
    name: "Children.count",
    example: `React.Children.count(this.props.children);`,
    reference: "https://reactjs.org/docs/react-api.html#reactchildrencount",
  },
  {
    name: "Children.only",
    example: `React.Children.only(this.props.children);`,
    reference: "https://reactjs.org/docs/react-api.html#reactchildrenonly",
  },
  {
    name: "Children.toArray",
    example: `React.Children.toArray(this.props.children)`,
    reference: "https://reactjs.org/docs/react-api.html#reactchildrentoarray",
  },
];

export default extendWithDefaults(data, {
  module: "react",
  category: "Children",
});
