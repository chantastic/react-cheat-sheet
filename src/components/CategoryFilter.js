import React, { Component } from "react";
import cxs from "cxs";

class CategoryFilter extends Component {
  render() {
    const { active, name, onToggle } = this.props;

    return (
      <label
        className={cxs({
          marginRight: ".5rem",
          marginTop: ".5rem",
          borderRadius: "2px",
          backgroundColor: active ? "#ffd43b" : "#b0b6bd",
          fontWeight: "500",
          color: "#fff",
          fontSize: "1em",
          lineHeight: "2em",
          display: "inline-block",
          padding: "0 1em",
          cursor: "pointer",
          whiteSpace: "nowrap",
          textDecoration: "none",
          borderWidth: "1px",
          borderStyle: "solid",
          userSelect: "none",
          outline: "none",
        })}
      >
        <span
          className={cxs({
            color: active ? "#212529" : "#fff",
          })}
        >
          {name + " "}
        </span>
        <input
          checked={active}
          className={cxs({
            marginLeft: ".25em",
            verticalAlign: "middle",
            position: "relative",
            top: "-2px",
          })}
          onChange={e => onToggle(name, e.target.checked)}
          type="checkbox"
        />
      </label>
    );
  }
}

export default CategoryFilter;
