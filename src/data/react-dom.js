import extendWithDefaults from "../assignSharedDefaults";

const data = [
  {
    name: "render",
    example: `import { render } from "react-dom";

render(
  <MyComponent />,
  document.getElementById("component-root"),
  () => console.log("MyComponent mounted.")
);`,
    reference: "https://reactjs.org/docs/react-dom.html#render",
    module: "react-dom",
  },
  {
    name: "hydrate",
    example: `import { hydrate } from "react-dom";

hydrate(
  <MyComponent />,
  document.getElementById("component-root"),
  () => console.log("MyComponent hydrated.")
);`,
    reference: "https://reactjs.org/docs/react-dom.html#hydrate",
    module: "react-dom",
  },
  {
    name: "unmountComponentAtNode",
    example: `import { unmountComponentAtNode } from "react-dom";

unmountComponentAtNode(document.getElementById('MyComponent'))`,
    reference: "https://reactjs.org/docs/react-dom.html#unmountcomponentatnode",
    module: "react-dom",
  },
  {
    name: "findDOMNode",
    example: `import { findDOMNode } from "react-dom";

findDOMNode(componentRef);`,
    reference: "https://reactjs.org/docs/react-dom.html#finddomnode",
    module: "react-dom",
  },
  {
    name: "createPortal",
    example: `import { createPortal } from "react-dom";

class MyPortalComponent extends React.Component {
  render() {

    return createPortal(
      this.props.children,
      document.getElementById("portal-element"),
    );
  }
}`,
    reference: "https://reactjs.org/docs/react-dom.html#createportal",
    module: "react-dom",
  },
  {
    name: "renderToString",
    example: `import { renderToString } from "react-dom/server";
ReactDOMServer.renderToString(<MyComponent />);`,
    reference: `https://reactjs.org/docs/react-dom-server.html#rendertostring`,
    module: "react-dom/server",
  },
  {
    name: "renderToStaticMarkup",
    example: `import {renderToStaticMarkup} from "react-dom/server";
renderToStaticMarkup(<MyComponent />);`,
    reference: "https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup",
    module: "react-dom/server",
  },
  {
    name: "renderToNodeStream",
    example: `import { renderToNodeStream } from "react-dom/server";
renderToNodeStream(<MyComponent />);`,
    reference: "https://reactjs.org/docs/react-dom-server.html#rendertonodestream",
    module: "react-dom/server",
  },
  {
    name: "renderToStaticNodeStream",
    example: `import { renderToStaticNodeStream } from "react-dom/server";
renderToStaticNodeStream(<MyComponent />);`,
    reference: "https://reactjs.org/docs/react-dom-server.html#rendertostaticnodestream",
    module: "react-dom/server",
  },
];

export default extendWithDefaults(data, {
  category: "react-dom",
});
