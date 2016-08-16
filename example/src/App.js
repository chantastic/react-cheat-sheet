import React from "react"
import ReactCheatSheet from "../../lib/index.js"

import categories from "./data/categories.js"
import data from "./data/data.js"

import "normalize.css"
import "table.css/table.css"
import "./App.css"

const App = () => (
  <div>
    <h1>
      <span>React Cheat Sheet</span>{" "}
      <SubHeading>v15</SubHeading>
    </h1>

    <ReactCheatSheet
      categories={categories}
      data={data}
    />

    <Footer>
      Copyright &copy; 2015 Michael Chan. Hit me up: <a href="https://twitter.com/chantastic">@chantastic</a>.
    </Footer>
  </div>
)

// private

const Footer = props =>
  <div
    {...props}
    style={{
      padding: "1rem 0",
    }}
  />

const SubHeading = props =>
  <small
    {...props}
    style={{
      color: "#aaa",
      fontSize: ".5em",
    }}
  />


export default App
