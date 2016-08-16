import React from "react"
import ReactCheatSheet from "../../src/ReactCheatSheet.js"

import categories from "./data/categories.js"
import data from "./data/data.js"

import "normalize.css"
import "table.css/table.css"
import "./App.css"

const App = () => (
  <ReactCheatSheet
    categories={categories}
    data={data}
  />
)

export default App
