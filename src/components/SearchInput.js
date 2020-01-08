import React from "react";
import cxs from "cxs";

const SearchInput = ({ handleSearchChange, searchPredicate }) => (
  <label>
    <span
      className={cxs({
        position: "absolute !important",
        clip: "rect(1px, 1px, 1px, 1px)",
      })}
    >
      Filter Search
    </span>
    <input
      autoFocus
      placeholder="Filter by name"
      type="text"
      className={cxs({
        padding: "1rem",
        width: "100%",
        borderRadius: "2px",
        border: "1px solid #adb5bd",
        color: "#000",
        overflow: "visible",
        margin: 0,
        boxSizing: "border-box",
      })}
      value={searchPredicate}
      onChange={e => handleSearchChange(e.target.value)}
    />
  </label>
);

export default SearchInput;
