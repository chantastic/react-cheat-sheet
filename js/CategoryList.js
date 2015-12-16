import React from 'react';

const styles = () => {
  return {
    padding: '1.5em 0',
    borderBottom: '1px solid #e0e0e0',
  };
};

const CategoryList = (props) => (
  <div style={styles()} {...props} />
);

export default CategoryList;
