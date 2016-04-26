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
    setStateTriggersUpdate: "no",
    calledFor: "initial render()",
    useFor: "async setup, refs, DOM manipulation",
    receivesContext: "no",
  },
  {
    name: "componentWillReceiveProps",
    setStateTriggersUpdate: "no",
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
          <td data-label="setState() triggers an update">{event.setStateTriggersUpdate}</td>
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
    example: `componentWillMount: function () {
  // invoked once, before initial 'render'
}`,
    reference: "http://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount",
  },
  {
    name: "componentDidMount",
    example: `componentDidMount: function () {
  // invoked once (client-only), after initial 'render'
  // good for AJAX, setTimeout, setInterval
}`,
    reference: "http://facebook.github.io/react/docs/component-specs.html#mounting-componentdidmount",
  },
  {
    name: "componentWillReceiveProps",
    example: `componentWillReceiveProps: function (nextProps) {
  // invoked when component is receiving props, not for initial 'render'
}`,
    reference: "http://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops",
  },
  {
    name: "shouldComponentUpdate",
    example: `shouldComponentUpdate: function (nextProps, nextState) {
  // invoked before rendering with new props, not for initial 'render'
}`,
    reference: "http://facebook.github.io/react/docs/component-specs.html#updating-shouldcomponentupdate",
  },
  {
    name: "componentWillUpdate",
    example: `componentWillUpdate: function (nextProps, nextState) {
  // invoked immediately before rendering with new props or state, not for initial 'render'
  // see componentWillReceiveProps if you need to call setState
}`,
    reference: "http://facebook.github.io/react/docs/component-specs.html#updating-componentwillupdate",
    notSupported: "this.setState",
  },
  {
    name: "componentDidUpdate",
    example: `componentDidUpdate: function (prevProps, prevState) {
  // invoked immediately after DOM updates, not for initial 'render'
}`,
    reference: "http://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate",
  },
  {
    name: "componentWillUnmount",
    example: `componentWillUnmount: function () {
  // invoked immediately before a component is unmounted from the DOM
}`,
    reference: "http://facebook.github.io/react/docs/component-specs.html#unmounting-componentwillunmount",
  },
];

export default extendWithDefaults(data, {
  module: "react",
  category: "LIFECYCLE",
});
