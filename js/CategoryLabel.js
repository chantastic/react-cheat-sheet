import React, { PropTypes } from "react";

function styles (props) {
  return {
    backgroundColor: (props.active) ? "#ffdc00" : "#aaa",
  };
};

const CategoryLabel = (props) => (
  <label
    className="d-ib mt-05r mr-05r py-025r px-05r bs-2p c-l c-p us-n"
    style={styles(props)}
    {...props}
  />
);

CategoryLabel.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default CategoryLabel;
