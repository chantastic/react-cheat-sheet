import React from "react";
import ReactDOM from "react-dom";
import ReactCheatSheet from "./ReactCheatSheet.js";

import entries from "./data.js";

ReactDOM.render(<ReactCheatSheet entries={entries} />, document.getElementById("app"));
