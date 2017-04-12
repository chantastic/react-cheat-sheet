import React from "react";
import extendWithDefaults from "../assignSharedDefaults";

const lifecycleMethods = [
  {
    name: "componentWillMount",
    setStateTriggersUpdate: "no",
    calledFor: "initial render()",
    useFor: ".",
    receivesContext: "no",
  },
  {
    name: "componentDidMount",
    setStateTriggersUpdate: "yes",
    calledFor: "initial render()",
    useFor: "async setup, refs, DOM manipulation",
    receivesContext: "no",
  },
  {
    name: "componentWillReceiveProps",
    setStateTriggersUpdate: "yes",
    calledFor: "new props",
    useFor: "respond to props before update",
    receivesContext: "yes",
  },
  {
    name: "shouldComponentUpdate",
    setStateTriggersUpdate: "yes",
    calledFor: "new props/state",
    useFor: "performance. return false to skip update",
    receivesContext: "yes",
  },
  {
    name: "componentWillUpdate",
    setStateTriggersUpdate: "n/a",
    calledFor: "new props/state",
    useFor: "preparation before update",
    receivesContext: "yes",
  },
  {
    name: "componentDidUpdate",
    setStateTriggersUpdate: "yes",
    calledFor: "new props/state",
    useFor: "DOM manipulation after update",
    receivesContext: "no",
  },
  {
    name: "componentWillUnmount",
    setStateTriggersUpdate: "n/a",
    calledFor: "unmounting",
    useFor: "cleanup of componentDidMount setup",
    receivesContext: "no",
  },
];

const LifecycleMethodsChart = () => (
  <table>
    <thead>
      <tr>
        <th>name</th>
        <th>called for</th>
        <th>receives context</th>
        <th>setState() triggers an update</th>
      </tr>
    </thead>

    <tbody>
      {lifecycleMethods.map((event, i) => (
        <tr key={i}>
          <td data-label="name">{event.name}</td>
          <td data-label="called for">{event.calledFor}</td>
          <td data-label="receives context">{event.receivesContext}</td>
          <td data-label="setState() triggers an update">
            {event.setStateTriggersUpdate}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
const data = [
  {
    name: "Lifecycle methods",
    chart: <LifecycleMethodsChart />,
    example: "",
  },
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
  category: "misc",
});
