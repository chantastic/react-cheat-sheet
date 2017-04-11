import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  padding: 1rem;
  width: 100%;
  border-radius: 2px;
  border: 1px solid #adb5bd;
  color: #000;
  overflow: visible;
  margin: 0;
  box-sizing: border-box;
`;

const SearchInput = ({
  handleSearchChange,
  searchPredicate
}) => (
  <Input
    autoFocus
    placeholder="Filter by name"
    type="text"
    className="p-2 c-black bw-1p bc-gray5 w-100% bs-bb br-2p"
    value={searchPredicate}
    onChange={e => handleSearchChange(e.target.value)}
  />
);

SearchInput.propTypes = {
  handleSearchChange : PropTypes.func.isRequired,
  searchPredicate : PropTypes.string.isRequired,
}

export default SearchInput;
