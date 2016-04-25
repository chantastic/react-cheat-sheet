import React, { Component, PropTypes } from "react";
import CategoryLabel from "./CategoryLabel";

function constantizeName (name) {
  return name.replace(/[^a-z0-9]/gi,"").toUpperCase();
}

export default class CategoryButton extends Component {
  render () {
    const {
      active,
      name,
      onToggle,
    } = this.props;

    return (
      <CategoryLabel active={active} >
        <span style={{ color: (active) ? "#222" : "#fff"}}>{name + " "}</span>
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
  name: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};
