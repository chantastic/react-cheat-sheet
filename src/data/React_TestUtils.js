import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "Simulate (basic)",
    example: `var subject = TestUtils.renderIntoDocument(
  <div onClick={handleClick} />
);

TestUtils.Simulate.click(subject);`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#simulate",
    playground: "http://jsbin.com/foxini/edit?html,js,console",
  },

  {
    name: "Simulate (with data)",
    example: `function handleChange (event) {
  console.log('A change was simulated with key: ' + event.key);
}

var subject = TestUtils.renderIntoDocument(
  <input type="text" onChange={handleChange} />
);

TestUtils.Simulate.change(subject, { key: "Enter" });`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#simulate",
    playground: "http://jsbin.com/wiqile/edit?html,js,console",
  },

  {
    name: "renderIntoDocument",
    example: `var componentTree = TestUtils.renderIntoDocument(<div><span /></div>);

console.log('You mounted a component tree with a ' + componentTree.tagName + ' at the root!');`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#renderintodocument",
    playground: "http://jsbin.com/buzigo/edit?html,js,console",
  },

  {
    name: "mockComponent",
    example: `// no example`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#mockcomponent",
  },

  {
    name: "isElement",
    example: `expect(TestUtils.isElement(<div />)).toBe(true);`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#iselement",
    playground: "http://jsbin.com/jiyune/edit?html,js,console",
  },

  {
    name: "isElementOfType",
    example: `var MyComponent = React.createClass({
  render () {
    return <div />;
  }
});

expect(
  TestUtils.isElementOfType(<MyComponent />, MyComponent)
).toBe(true);`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#iselementoftype",
    playground: "http://jsbin.com/pasohi/edit?html,js,console",
  },

  {
    name: "isDOMComponent",
    example: `var subject = TestUtils.renderIntoDocument(<div />);

expect(
  TestUtils.isDOMComponent(subject)
).toBe(true);`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#isdomcomponent",
    playground: "http://jsbin.com/fadoka/edit?html,js,console",
  },

  {
    name: "isCompositeComponent",
    example: `var subject = TestUtils.renderIntoDocument(
  <CompositeComponent />
);

expect(
  TestUtils.isCompositeComponent(subject)
).toBe(true);`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#iscompositecomponent",
    playground: "http://jsbin.com/vocofa/edit?html,js,console",
  },

  {
    name: "isCompositeComponentWithType",
    example: `var CompositeComponent = React.createClass({
  render () {
    return <div />;
  }
});

var subject = TestUtils.renderIntoDocument(
  <CompositeComponent />
);

expect(
  TestUtils.isCompositeComponentWithType(
    subject,
    CompositeComponent
  )
).toBe(true);`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#iscompositecomponentwithtype",
    playground: "http://jsbin.com/kegoqe/edit?html,js,console",
  },

  {
    name: "findAllInRenderedTree",
    example: `var CompositeComponent = React.createClass({
  render () {
    return <div><div /></div>;
  }
});

var componentTree = TestUtils.renderIntoDocument(
  <CompositeComponent />
);

var allDivs = TestUtils.findAllInRenderedTree(
  componentTree,
  (c) => c.tagName === 'DIV'
)

expect(allDivs).toBeAn('array');
expect(allDivs.length).toBe(2);`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#findallinrenderedtree",
    playground: "http://jsbin.com/dozevu/edit?html,js,console",
  },

  {
    name: "scryRenderedDOMComponentsWithClass",
    example: `var CompositeComponent = React.createClass({
  render () {
    return (
      <div className="target">
        <div className="not-target">
          <div className="target" />
        </div>
      </div>
    );
  }
});

var componentTree = TestUtils.renderIntoDocument(
  <CompositeComponent />
);

var allDOMComponentsWithMatchingClass = TestUtils.scryRenderedDOMComponentsWithClass(
  componentTree,
  'target'
);

expect(allDOMComponentsWithMatchingClass).toBeAn('array');
expect(allDOMComponentsWithMatchingClass.length).toBe(2);`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#scryrendereddomcomponentswithclass",
    playground: "http://jsbin.com/kujeda/edit?html,js,console",
  },

  {
    name: "findRenderedDOMComponentWithClass",
    example: `var MyCompositeComponent = React.createClass({
  render () {
    return <MyNestedComponent />;
  }
});

var MyNestedComponent = React.createClass({
  render () {
    return <div className="nested"/>;
  }
});

var componentTree = TestUtils.renderIntoDocument(<MyCompositeComponent />);

var singleComponentWithMatchedClass = TestUtils.findRenderedDOMComponentWithClass(
  componentTree,
  'nested'
);

expect(singleComponentWithMatchedClass).toBeAn('object');
expect(singleComponentWithMatchedClass).toNotBeAn('array');
expect(singleComponentWithMatchedClass.className).toBe('nested');`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#findrendereddomcomponentwithclass",
    playground: "http://jsbin.com/kuteve/edit?html,js,console",
  },

  {
    name: "scryRenderedDOMComponentsWithTag",
    example: `var CompositeComponent = React.createClass({
  render () {
    return <div><div /></div>;
  }
});

var componentTree = TestUtils.renderIntoDocument(
  <CompositeComponent />
);

var allDivs = TestUtils.scryRenderedDOMComponentsWithTag(
  componentTree,
  'DIV'
);

expect(allDivs).toBeAn('array');
expect(allDivs.length).toBe(2);`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#scryrendereddomcomponentswithtag",
    playground: "http://jsbin.com/hehede/edit?html,js,console",
  },

  {
    name: "findRenderedDOMComponentWithTag",
    example: `var MyCompositeComponent = React.createClass({
  render () {
    return <MyNestedComponent />;
  }
});

var MyNestedComponent = React.createClass({
  render () {
    return <div />;
  }
});

var componentTree = TestUtils.renderIntoDocument(<MyCompositeComponent />);

var onlyDiv = TestUtils.findRenderedDOMComponentWithTag(
  componentTree,
  'div'
);

expect(onlyDiv).toBeAn('object');
expect(onlyDiv).toNotBeAn('array');
expect(onlyDiv.tagName).toBe('DIV');`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#findrendereddomcomponentwithtag",
    playground: "http://jsbin.com/puhule/edit?html,js,console",
  },

  {
    name: "scryRenderedComponentsWithType",
    example: `var MyCompositeComponent = React.createClass({
  render () {
    return (
      <div>
        <Target />
        <br />
        <Target />
      </div>
    )
  }
});

var Target = React.createClass({
  render () {
    return <div />;
  }
});

var componentTree = TestUtils.renderIntoDocument(
  <MyCompositeComponent />
);

var allTargetComponents = TestUtils.scryRenderedComponentsWithType(
  componentTree,
  Target
);

expect(allTargetComponents).toBeAn('array');
expect(allTargetComponents.length).toBe(2);`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#scryrenderedcomponentswithtype",
    playground: "http://jsbin.com/lesowo/edit?html,js,console",
  },

  {
    name: "findRenderedComponentWithType",
    example: `var MyCompositeComponent = React.createClass({
  render () { return <TargetComponent /> }
});

var TargetComponent = React.createClass({
  render () { return <div /> }
});

var componentTree = TestUtils.renderIntoDocument(
  <MyCompositeComponent />
);

var onlyTargetComponent = TestUtils.findRenderedComponentWithType(
  componentTree,
  TargetComponent
);

expect(onlyTargetComponent).toBeAn('object');
expect(onlyTargetComponent).toNotBeAn('array');
expect(TestUtils.isCompositeComponentWithType(
  onlyTargetComponent,
  TargetComponent
)).toBe(true);`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#findrenderedcomponentwithtype",
    playground: "http://jsbin.com/wosane/edit?html,js,console",
  },

  {
    name: "Shallow rendering (basics)",
    example: `// 1. create a renderer
var renderer = TestUtils.createRenderer();

// 2. render component into renderer
renderer.render(<MyComponent />);

// 3. capture renderer output
var subject = renderer.getRenderOutput();

// 4. make assertions
expect(subject.type).toBe('div');`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#shallow-rendering",
    playground: "http://jsbin.com/raloqu/edit?html,js,console",
  },

  {
    name: "Shallow rendering (type example)",
    example: `var renderer = TestUtils.createRenderer();

renderer.render(<MyComponent />);

var subject = renderer.getRenderOutput();

expect(subject.type).toBe('div');  // => true`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#shallow-rendering",
    playground: "http://jsbin.com/xojudi/edit?html,js,console",
  },

  {
    name: "Shallow rendering (props example)",
    example: `var renderer = TestUtils.createRenderer();

renderer.render(<MyComponent className="my-component" />);

var subject = renderer.getRenderOutput();

expect(subject.props.className).toBe('my-component'); // => true`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#shallow-rendering",
    playground: "http://jsbin.com/najubu/edit?html,js,console",
  },

  {
    name: "Shallow rendering (child-count example)",
    example: `var renderer = TestUtils.createRenderer();

renderer.render(
  <MyList items={[1, 2, 3]} />
);

var subject = renderer.getRenderOutput();

var childCount = React.Children.count(subject.props.children);

expect(childCount).toBe(3); // => true`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#shallow-rendering",
    playground: "http://jsbin.com/dayomi/edit?html,js,console",
  },

  {
    name: "Shallow rendering (child-equality example)",
    example: `var renderer = TestUtils.createRenderer();

renderer.render(
  <MyComponent>
    <div>Thing 1</div>
    <div>Thing 2</div>
  </MyComponent>
);

var subject = renderer.getRenderOutput();

expect(subject.props.children).toEqual([
  <div>Thing 1</div>,
  <div>Thing 2</div>
]); // => true`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#shallow-rendering",
    playground: "http://jsbin.com/sexeve/edit?html,js,console",
  },

  {
    name: "Shallow rendering (events example)",
    example: `var renderer = TestUtils.createRenderer();

var spy = expect.createSpy();

renderer.render(<MyComponent onClick={spy} />);

var subject = renderer.getRenderOutput();

expect(spy.call.length).toEqual(1); // => true`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#shallow-rendering",
    playground: "http://jsbin.com/quzeya/edit?html,js,console",
  },

  {
    name: "Shallow rendering (state changes example)",
    example: `var renderer = TestUtils.createRenderer();

renderer.render(<ClickCounter />);

// test initial rendering
var result = renderer.getRenderOutput();

expect(result.props.children).toEqual(0);


// test post-click rendering
result.props.onClick();

var clickedResult = renderer.getRenderOutput();

expect(clickedResult.props.children).toEqual(1);`,
    reference: "https://facebook.github.io/react/docs/test-utils.html#shallow-rendering",
    playground: "http://jsbin.com/nobavu/edit?html,js,console",
  },
];

export default extendWithDefaults(data, {
  module: "react-dom/test-utils",
  category: "test-utils",
});
