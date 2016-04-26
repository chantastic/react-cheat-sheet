import React from "react";
import ReactDOM from "react-dom";
import ReactCheatSheet from "./ReactCheatSheet.js";

import categories from "./categories.js";
import data from "./data.js";

/* styles via style-loader */
require("normalize.css");
require("table.css/table.css");
require("./custom-minions");
require("../css/index.css");

ReactDOM.render(
  <ReactCheatSheet
    categories={categories}
    data={data}
  />,
  document.getElementById("app")
);
