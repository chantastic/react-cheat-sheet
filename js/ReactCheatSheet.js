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
        <h1>
          <span>React Cheat Sheet</span>{' '}
          <small style={{color: "#aaa", fontSize: ".5em"}}>v15</small>
        </h1>

        <label>
          <input
            autoFocus
            onChange={handleChange.bind(this)}
            placeholder="Filter by name"
            ref={c => this.searchInput = c}
            style={styles.searchInput}
            type="text"
            value={this.state.predicate}
          />
        </label>

        <CategoryList>
          {this.props.categories.map(({ name, key }, i) => (
            <CategoryButton
              active={includes(this.state.categories, key)}
              key={i}
              name={name}
              onToggle={handleCategoryChange.bind(this)}
            />
          ))}
        </CategoryList>

        <section>
          {(this.filteredResults.length)
           ? results()
           : <NoResults />
          }
        </section>

        <div className="py-1r">
          Copyright &copy; 2015 Michael Chan. Hit me up: <a href="https://twitter.com/chantastic">@chantastic</a>.
        </div>
      </main>
    );
  }
}

ReactCheatSheet.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,

  categories: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default ReactCheatSheet;
