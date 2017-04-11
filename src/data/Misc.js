import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "ref (class component)",
    example: `class AutoFocusTextInput extends React.Component {
  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    return (
      <CustomTextInput
        ref={(input) => { this.textInput = input; }} />
    );
  }
}`,
    reference: "https://facebook.github.io/react/docs/refs-and-the-dom.html#adding-a-ref-to-a-class-component",
  },
  {
    name: "ref (functional component)",
    example: `function CustomTextInput(props) {
  let textInput = null;

  function handleClick() {
    textInput.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={(input) => { textInput = input; }} />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );  
}`,
    reference: "https://facebook.github.io/react/docs/refs-and-the-dom.html#refs-and-functional-components",
  },
  {
    name: "functional component",
    example: `const Greeting = props => <div>Hello {props.name}</div>;`,
    reference: "https://facebook.github.io/react/docs/reusable-components.html#stateless-functions",
    module: "react",
  },
  {
    name: "functional component (with context)",
    example: `import { string } from "prop-types";

const Greeting = (props, context) => (
  <div>{context.salutation} {props.name}</div>
);

Greeting.contextTypes = { salutation: string };`,
    reference: "https://facebook.github.io/react/docs/reusable-components.html#stateless-functions",
    module: "react",
  },
];

export default extendWithDefaults(data, {
  category: "MISC",
});
