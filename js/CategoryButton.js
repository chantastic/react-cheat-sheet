import React, { Component, PropTypes } from "react";
import CategoryLabel from "./CategoryLabel";

function constantizeName (name) {
  return name.replace(/[^a-z0-9]/gi,"").toUpperCase();
}

export default class CategoryButton extends Component {
  render () {
    const {
      color,
      active,
      name,
      nameStyle,
      onToggle,
    } = this.props;

    return (
      <CategoryLabel
        active={active}
        color={color}
      >
        <span style={nameStyle}>{name + " "}</span>
        <input
          checked={active}
          onChange={e => onToggle(constantizeName(name), e.target.checked)}
          type="checkbox"
        />
      </CategoryLabel>
    );
  }
}

CategoryButton.propTypes = {
  active: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,

  nameStyle: PropTypes.shape({
    color: PropTypes.string,
  }),
};
