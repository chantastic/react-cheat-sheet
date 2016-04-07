// @flow

import React, { Component, PropTypes } from "react";

import styles from "./styles";

import ReferenceItem from "./ReferenceItem.js";
import CategoryList from "./CategoryList.js";
import CategoryButton from "./CategoryButton.js";
import NoResults from "./NoResults.js";

import includes from "lodash.includes";
import filter from "lodash.filter";
import without from "lodash.without";

function filterByCategory(_data, categories = []) {
  if (!categories.length) return _data;

  return filter(_data, ({category}) => includes(categories, category));
}

function filterResults (_data, predicate = "", categories = []) {
  return filter(filterByCategory(_data, categories), (({name}) => {
    return name.match(new RegExp(predicate, "i"));
  }));
}

function toggleCategory(arr, item, cond) {
  return (cond) ? arr.concat([item]) : without(arr, item);
}

function handleChange () {
  this.setState({ predicate: this.searchInput.value });
}

function handleCategoryChange (category, state) {
  this.setState({ categories: toggleCategory(this.state.categories, category, state) });
}

class ReactCheatSheet extends Component {
  props: {
    categories: Array<{ color: string, key: string, name: string }>,
    data: Array<Any>
  };

  constructor (props) {
    super(props);

    this.state = {
      predicate: "",
      categories: [],
    };
  }

  get filteredResults () {
    return filterResults(this.props.data, this.state.predicate, this.state.categories);
  }

  render () {
    const results = () => (
      this.filteredResults.map((item, i) => <ReferenceItem key={i} {...item} />)
    );

    return (
      <main>
        <label>
          <input
            autoFocus
            type="text"
            style={styles.searchInput}
            placeholder="Filter by name"
            value={this.state.predicate}
            ref={c => this.searchInput = c}
            onChange={handleChange.bind(this)}
          />
        </label>

        <CategoryList>
          {this.props.categories.map(({ color, name, key }, i) => (
            <CategoryButton
              color={color}
              name={name}
              nameStyle={(includes(this.state.categories, "TOPLEVEL") && key === "TOPLEVEL") ? { color: "#222" } : null} // wow. this is dumb
              active={includes(this.state.categories, key)}
              onToggle={handleCategoryChange.bind(this)}
              key={i}
            />
          ))}
        </CategoryList>

        <section>
          {(this.filteredResults.length)
           ? results()
           : <NoResults />
          }
        </section>
      </main>
    );
  }
}

// ReactCheatSheet.propTypes = {
//   categories: PropTypes.arrayOf(
//     PropTypes.shape({
//       color: PropTypes.string.isRequired,
//       key: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ),
//   data: PropTypes.arrayOf(PropTypes.object).isRequired,
// }

export default ReactCheatSheet;
