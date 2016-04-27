import React, { Component, PropTypes } from "react";

import ReferenceItem from "./ReferenceItem.js";
import CategoryButton from "./CategoryButton.js";

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
    return (
      <main>
        <header className="p-1r@mn p-0@md gc-l.96@mn gc-t@md">
          <h1 className="ta-c@mn @ta-l@md fs-1r m-0 fs-1r@mn fs-2r@md">
            <span>React Cheat Sheet</span>{' '}
            <small className="fs-.5 c-l.7">v15</small>
          </h1>

          <label>
            <input
              autoFocus
              className="p-05r@mn p-1r@md w-100% bs-2p bw-1p bc-l.9 c-l.0"
              onChange={handleChange.bind(this)}
              placeholder="Filter by name"
              ref={c => this.searchInput = c}
              type="text"
              value={this.state.predicate}
            />
          </label>
        </header>

        <div className="d-n@mn d-b@md py-1.5r bbw-1p bc-l.9">
          {this.props.categories.map(({ name, key }, i) => (
            <CategoryButton
              active={includes(this.state.categories, key)}
              key={i}
              name={name}
              onToggle={handleCategoryChange.bind(this)}
            />
          ))}
        </div>

        <section className="px-05r">
          {(this.filteredResults.length) ? (
            this.filteredResults.map((item, i) => (
              <ReferenceItem key={i} {...item} />
            ))
          ) : (
            <article className="py-1r">
              <h2>No results</h2>
            </article>
          )}
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
