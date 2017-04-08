import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { union } from 'lodash';
import { Link as UnstyledLink } from 'react-router-dom';

const Button = styled.span`
  margin-right: .5rem;
  margin-top: .5rem;
  border-radius: 2px;
  background-color: ${props => props.active ? '#ffd43b' : '#adb5bd'};
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

const Link = styled(UnstyledLink)`
  outline: none;
`;

const Label = styled.span`
  color: ${props => props.active ? '#212529' : '#fff'};
`;

const CheckBox = styled.input`
  position: relative;
  top: -2px;
`;

class CategoryFilter extends Component {

  static propTypes = {
    active: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
  }

  transformCategoryName = (name) => {
    return name.replace(/[^a-z0-9]/gi,"").toUpperCase();
  }

  createFilterQuery = (categories = []) => {
    return {
      pathname: '/filter',
      search: `?categories=${union(this.props.categories.map((category) => {
        return this.transformCategoryName(category);
      }), categories.map((category) => {
        return this.transformCategoryName(category);
      })).join(',')}`
    }
  }

  render () {

    const {
      active,
      name,
      onToggle,
    } = this.props;

    return (
      <Link
        to={this.createFilterQuery([ name ])}
        onClick={e => onToggle(this.transformCategoryName(name), !active)}
        replace
      >
        <Button active={active}>
        <Label active={active}>{name + " "}</Label>
        <CheckBox
          checked={active}
          type="checkbox"
          readOnly
        />
        </Button>
      </Link>
    );

    // return (
    //   <Button active={active}>
    //     <Label active={active}>{name + " "}</Label>
    //     <CheckBox
    //       checked={active}
    //       onChange={e => onToggle(name.replace(/[^a-z0-9]/gi,"").toUpperCase(), e.target.checked)}
    //       type="checkbox"
    //     />
    //   </Button>
    // )
  }

}

export default CategoryFilter;
