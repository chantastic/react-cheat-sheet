import ReactDOM from './data/ReactDOM';
import ReactDOMServer from './data/ReactDOM_Server';
import ReactTopLevel from './data/React_TopLevel';
import ReactSpec from './data/React_Spec';
import ReactLifecycle from './data/React_Lifecycle';
import ReactPropTypes from './data/React_PropTypes';

export default [
  ...ReactDOM,
  ...ReactDOMServer,
  ...ReactTopLevel,
  ...ReactSpec,
  ...ReactLifecycle,
  ...ReactPropTypes,
];
