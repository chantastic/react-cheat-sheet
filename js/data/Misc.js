import React from "react";
import extendWithDefaults from "../assignSharedDefaults";

import { red } from "../colors";

const lifecycleMethods = [
  {
    name: "componentWillMount",
    setStateTriggersUpdate: "no",
    calledFor: "initial render()",
    useFor: ".",
  },
  {
    name: "componentDidMount",
    setStateTriggersUpdate: "no",
    calledFor: "initial render()",
    useFor: "async setup, refs, DOM manipulation",
  },
  {
    name: "componentWillReceiveProps",
    setStateTriggersUpdate: "no",
    calledFor: "new props",
    useFor: "respond to props before update",
  },
  {
    name: "shouldComponentUpdate",
    setStateTriggersUpdate: "yes",
    calledFor: "new props/state",
    useFor: "performance. return false to skip update",
  },
  {
    name: "componentWillUpdate",
    setStateTriggersUpdate: "n/a",
    calledFor: "new props/state",
    useFor: "preparation before update",
  },
  {
    name: "componentDidUpdate",
    setStateTriggersUpdate: "yes",
    calledFor: "new props/state",
    useFor: "DOM manipulation after update",
  },
  {
    name: "componentWillUnmount",
    setStateTriggersUpdate: "n/a",
    calledFor: "unmounting",
    useFor: "cleanup of componentDidMount setup",
  },
];

const LifecycleMethodsChart = (props) => (
  <table>
    <thead>
      <tr>
        <th>name</th>
        <th>called for</th>
        <th>calling setState() triggers an update</th>
      </tr>
    </thead>

    <tbody>
      {lifecycleMethods.map((event, i) => (
        <tr key={i}>
          <td data-label="name">{event.name}</td>
          <td data-label="called for">{event.calledFor}</td>
          <td data-label="calling setState() triggers an update">{event.setStateTriggersUpdate}</td>
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
    name: "Stateless function syntax",
    example: `// ES5
function Greeting(props) {
  return <div>Hello {props.name}</div>;
}

// ES2015
const Greeting = (props) => (
  <div>Hello {props.name}</div>
);`,
    reference: "https://facebook.github.io/react/docs/reusable-components.html#stateless-functions",
    refsNotAvailable: true,
    module: "react",
  },
];

export default extendWithDefaults(data, {
  color: red,
  category: "MISC",
});
