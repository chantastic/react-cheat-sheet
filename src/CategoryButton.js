import React, { PropTypes } from "react";
import colors from "./colors";

function constantizeName (name) {
  return name.replace(/[^a-z0-9]/gi,"").toUpperCase();
}

const CategoryButton = ({
  active,
  name,
  onToggle,
}) =>
  <Label active={active}>
    <Description active={active}>
      {name + " "}
    </Description>

    <CheckboxInput
      checked={active}
      onChange={e => onToggle(
        constantizeName(name),
        e.target.checked
      )}
    />
  </Label>

CategoryButton.propTypes = {
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};

// private

const Label = props =>
  <label
    {...props}
    style={{
      display: "inline-block",
      backgroundColor: (props.active) ? colors.yellow : colors.lightGray,
      marginTop: ".5em",
      marginRight: ".5em",
      padding: "0.25em .5em",
      borderRadius: "2px",
      color: colors.white,
      cursor: "pointer",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
    }}
  />

Label.propTypes = {
  active: PropTypes.bool.isRequired,
};

const Description = ({
  active,
  ...props
}) =>
  <span
    {...props}
    style={{
      color: (active) ? colors.black: colors.white,
    }}
  />

const CheckboxInput = props =>
  <input
    {...props}
    type="checkbox"
  />

export default CategoryButton
