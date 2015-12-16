import ReactDOM from './data/ReactDOM';
import ReactDOMServer from './data/ReactDOM_Server';
import ReactTopLevel from './data/React_TopLevel';
import ReactComponent from './data/React_Component';
import ReactSpec from './data/React_Spec';
import ReactLifecycle from './data/React_Lifecycle';
import ReactPropTypes from './data/React_PropTypes';
import ReactTestUtils from './data/React_TestUtils';
import Misc from './data/Misc';

export default [
  ...ReactDOM,
  ...ReactDOMServer,
  ...ReactTopLevel,
  ...ReactComponent,
  ...ReactSpec,
  ...ReactLifecycle,
  ...ReactPropTypes,
  ...ReactTestUtils,
  ...Misc,
];
