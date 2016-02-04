import React from "react";
import ReactDOM from "react-dom";
import ReactCheatSheet from "./ReactCheatSheet.js";

import categories from "./categories.js";
import data from "./data.js";

ReactDOM.render(
  <ReactCheatSheet
    categories={categories}
    data={data}
  />,
  document.getElementById("app")
);
