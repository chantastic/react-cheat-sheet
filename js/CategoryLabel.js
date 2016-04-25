import React, { PropTypes } from "react";

const styles = (props) => {
  return {
    display: "inline-block",
    backgroundColor: (props.active) ? "#ffdc00" : "#aaa",
    marginTop: ".5em",
    marginRight: ".5em",
    padding: "0.25em .5em",
    borderRadius: "2px",
    color: "white",
    cursor: "pointer",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  };
};

const CategoryLabel = (props) => (
  <label style={styles(props)} {...props} />
);

CategoryLabel.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default CategoryLabel;
