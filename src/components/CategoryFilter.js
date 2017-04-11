import React, { Component } from "react";
import { bool, string, func } from "prop-types";
import styled from "styled-components";

const Button = styled.label`
  margin-right: .5rem;
  margin-top: .5rem;
  border-radius: 2px;
  background-color: ${props => props.active ? "#ffd43b" : "#adb5bd"};
  color: #fff;
  font-size: 1em;
  line-height: 2em;
  display: inline-block;
  padding: 0 1em;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  user-select: none;
  outline: none;
`;

const Label = styled.span`
  color: ${props => props.active ? "#212529" : "#fff"};
`;

const CheckBox = styled.input`
  position: relative;
  top: -2px;
`;

class CategoryFilter extends Component {
  static propTypes = {
    active: bool.isRequired,
    name: string.isRequired,
    onToggle: func.isRequired,
  };

  render() {
    const {
      active,
      name,
      onToggle,
    } = this.props;

    return (
      <Button active={active}>
        <Label active={active}>{name + " "}</Label>
        <CheckBox
          checked={active}
          onChange={e =>
            onToggle(
              name.replace(/[^a-z0-9]/gi, "").toUpperCase(),
              e.target.checked
            )}
          type="checkbox"
        />
      </Button>
    );
  }
}

export default CategoryFilter;
