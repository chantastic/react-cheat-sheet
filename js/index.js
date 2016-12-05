import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

/* styles via style-loader */
require("normalize.css")
require("table.css/table.css")
require("../css/index.css")

require("btn.css")
require("open-color.css")
require("minions.border-width")
require("minions.box-sizing")
require("minions.border-bottom-width")
require("minions.border-radius")
require("minions.display")
require("minions.font-family")
require("minions.font-weight")
require("minions.margin")
require("minions.overflow")
require("minions.overflow-x")
require("minions.overflow-y")
require("minions.position")
require("minions.text-align")
require("minions.width")
require("point.css")

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
