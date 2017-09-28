import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "render",
    example: `render() {
  return <div />;
}`,
    reference: "https://reactjs.org/docs/react-component.html#render"
  },
  {
    name: "constructor",
    example: `constructor(props) {
  super(props);
  this.state = {
    list: props.initialList
  };
}

// where props aren't used in constructor

constructor() {
  super();
  this.state = {
    list: []
  };
}`,
    reference: "https://reactjs.org/docs/react-component.html#constructor"
  },
  {
    name: "componentWillMount",
    example: `componentWillMount() {
  // invoked once.
  // fires before initial 'render'
}`,
    reference: "https://reactjs.org/docs/react-component.html#componentwillmount"
  },
  {
    name: "componentDidMount",
    example: `componentDidMount() {
  // good for AJAX: fetch, ajax, or subscriptions.

  // invoked once (client-side only).
  // fires before initial 'render'
}`,
    reference: "https://reactjs.org/docs/react-component.html#componentdidmount"
  },
  {
    name: "componentWillReceiveProps",
    example: `componentWillReceiveProps(nextProps) {
  // invoked every time component is recieves new props.
  // does not fire before initial 'render'
}`,
    reference: "https://reactjs.org/docs/react-component.html#componentwillreceiveprops"
  },
  {
    name: "shouldComponentUpdate",
    example: `shouldComponentUpdate(nextProps, nextState) {
  // invoked before every update (new props or state).
  // does not fire before initial 'render'.
}`,
    reference: "https://reactjs.org/docs/react-component.html#shouldcomponentupdate"
  },
  {
    name: "componentWillUpdate",
    example: `componentWillUpdate(nextProps, nextState) {
  // invoked immediately before update (new props or state).
  // does not fire before initial 'render'.

  // (see componentWillReceiveProps if you need to call setState)
}`,
    reference: "https://reactjs.org/docs/react-component.html#componentwillupdate",
    notSupported: "this.setState"
  },
  {
    name: "componentDidUpdate",
    example: `componentDidUpdate(prevProps, prevState) {
  // invoked immediately after DOM updates
  // does not fire after initial 'render'
}`,
    reference: "https://reactjs.org/docs/react-component.html#componentdidupdate"
  },
  {
    name: "componentWillUnmount",
    example: `componentWillUnmount() {
  // invoked immediately before a component is unmounted.
}`,
    reference: "https://reactjs.org/docs/react-component.html#componentwillunmount"
  },
  {
    name: "setState (function)",
    example: `// good for state transitions

this.setState((prevState, props) => {
  return {count: prevState.count + props.step};
});`,
    reference: "https://reactjs.org/docs/react-component.html#setstate"
  },
  {
    name: "setState (object)",
    example: `// good for static values

this.setState({mykey: 'my new value'});`,
    reference: "https://reactjs.org/docs/react-component.html#setstate"
  },
  {
    name: "setState (optional callback)",
    example: `// fires after setState
// prefer componentDidUpdate

this.setState(
  (prevState, props) => ({ count: prevState.count + props.step }),
  () => console.log(this.state.count)
);`,
    reference: "https://reactjs.org/docs/react-component.html#setstate"
  },
  {
    name: "forceUpdate",
    example: `// forces a re-render; AVOID if possible

this.forceUpdate();`,
    reference: "https://reactjs.org/docs/react-component.html#forceupdate"
  },
  {
    name: "displayName",
    example: `displayName: "MyComponent"`,
    reference: "https://reactjs.org/docs/react-component.html#defaultprops",
  },
  {
    name: "defaultProps",
    example: `class Greeting extends React.Component {
      render() {
        return <h1>Hi {this.props.name}</h1>
      }
    }
    
    CustomButton.defaultProps = {
      name: 'guest'
    };`,
    reference: "https://reactjs.org/docs/react-component.html#defaultprops",
  },
];

export default extendWithDefaults(data, {
  module: "react",
  category: "Component"
});
