import React, { PropTypes } from 'react';

const styles = (props) => {
  return {
    backgroundColor: (props.active) ? props.color : "#aaa",
    padding: "0.25em .5em",
    borderRadius: "2px",
    color: "white",
    cursor: "pointer",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  }
};

const CategoryLabel = (props) => (
  <label style={styles(props)} {...props} />
);

CategoryLabel.propTypes = {
  active: React.PropTypes.bool.isRequired
};

export default CategoryLabel;
