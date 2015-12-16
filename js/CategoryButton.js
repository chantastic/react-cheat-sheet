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
        color={color}
        active={active}
      >
        <span style={nameStyle}>{name + " "}</span>
        <input
          type="checkbox"
          checked={active}
          onChange={e => onToggle(constantizeName(name), e.target.checked)}
        />
      </CategoryLabel>
    );
  }
}

CategoryButton.propTypes = {
  color: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  nameStyle: PropTypes.shape({
    color: PropTypes.string,
  }),
};
