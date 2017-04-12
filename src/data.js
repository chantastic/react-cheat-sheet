import dom from "./data/react-dom";
import top from "./data/top-level-api";
import component from "./data/component";
import children from "./data/children";
import context from "./data/context";
import proptypes from "./data/prop-types";
import testutils from "./data/test-utils";
import misc from "./data/misc";

export default [
  ...top,
  ...component,
  ...children,
  ...context,
  ...dom,
  ...proptypes,
  ...testutils,
  ...misc,
];
