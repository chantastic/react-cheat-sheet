import React from "react";
import ReactDOM from "react-dom";
import ReactCheatSheet from "./ReactCheatSheet.js";

import categories from "./categories.js";

ReactDOM.render(
  <ReactCheatSheet
    categories={categories}
  />,
  document.getElementById("app")
);
