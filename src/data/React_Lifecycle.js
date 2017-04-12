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
    name: "componentWillMount",
    example: `componentWillMount() {
  // invoked once.
  // fires before initial 'render'
}`,
    reference: "https://facebook.github.io/react/docs/react-component.html#componentwillmount",
  },
  {
    name: "componentDidMount",
    example: `componentDidMount() {
  // good for AJAX: fetch, ajax, or subscriptions.

  // invoked once (client-side only).
  // fires before initial 'render'
}`,
    reference: "https://facebook.github.io/react/docs/react-component.html#componentdidmount",
  },
  {
    name: "componentWillReceiveProps",
    example: `componentWillReceiveProps(nextProps) {
  // invoked every time component is recieves new props.
  // does not before initial 'render'
}`,
    reference: "https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops",
  },
  {
    name: "shouldComponentUpdate",
    example: `shouldComponentUpdate(nextProps, nextState) {
  // invoked before every update (new props or state).
  // does not fire before initial 'render'.
}`,
    reference: "https://facebook.github.io/react/docs/react-component.html#shouldcomponentupdate",
  },
  {
    name: "componentWillUpdate",
    example: `componentWillUpdate(nextProps, nextState) {
  // invoked immediately before update (new props or state).
  // does not fire before initial 'render'.

  // (see componentWillReceiveProps if you need to call setState)
}`,
    reference: "https://facebook.github.io/react/docs/react-component.html#componentwillupdate",
    notSupported: "this.setState",
  },
  {
    name: "componentDidUpdate",
    example: `componentDidUpdate(prevProps, prevState) {
  // invoked immediately after DOM updates
  // does not fire after initial 'render'
}`,
    reference: "https://facebook.github.io/react/docs/react-component.html#componentdidupdate",
  },
  {
    name: "componentWillUnmount",
    example: `componentWillUnmount() {
  // invoked immediately before a component is unmounted.
}`,
    reference: "https://facebook.github.io/react/docs/react-component.html#componentwillunmount",
  },
];

export default extendWithDefaults(data, {
  module: "react",
  category: "Lifecycle",
});
