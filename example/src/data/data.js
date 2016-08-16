import ReactDOM from "./ReactDOM";
import ReactDOMServer from "./ReactDOM_Server";
import ReactTopLevel from "./React_TopLevel";
import ReactComponent from "./React_Component";
import ReactContext from "./React_Context";
import ReactSpec from "./React_Spec";
import ReactLifecycle from "./React_Lifecycle";
import ReactPropTypes from "./React_PropTypes";
import ReactTestUtils from "./React_TestUtils";
import Misc from "./Misc";

export default [
  ...ReactDOM,
  ...ReactDOMServer,
  ...ReactTopLevel,
  ...ReactComponent,
  ...ReactContext,
  ...ReactSpec,
  ...ReactLifecycle,
  ...ReactPropTypes,
  ...ReactTestUtils,
  ...Misc,
];
