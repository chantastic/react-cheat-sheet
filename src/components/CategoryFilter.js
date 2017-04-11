import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { concat, uniq, remove } from "lodash";
import { withRouter } from "react-router-dom";

const Button = styled.span`
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

const Link = styled.label`
  outline: none;
`;

const Label = styled.span`
  color: ${props => props.active ? "#212529" : "#fff"};
`;

const CheckBox = styled.input`
  position: relative;
  top: -2px;
  outline: none;
`;

class CategoryFilter extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
  };

  transformCategoryName = name => {
    return name.replace(/[^a-z0-9]/gi, "").toUpperCase();
  };

  createFilterQuery = (active, category) => {

    const categories = (active) ? uniq(concat(this.props.categories, category)) : remove(this.props.categories, (c) => {
      return c === category;
    });

    return {
      pathname: "/filter",
      search: `?categories=${categories.join(",")}`,
    };
  };

  render() {
    const {
      active,
      name,
      onToggle,
    } = this.props;

    return (
      <Link>
        <Button active={active}>
          <Label active={active}>{name + " "}</Label>
          <CheckBox
            checked={active}
            type="checkbox"
            onChange={e => onToggle(this.transformCategoryName(name), !active)}
          />
        </Button>
      </Link>
    );
  }
}

export default withRouter(CategoryFilter);
