import React, { Component, PropTypes } from "react";

import CategoryButton from "./CategoryButton";
import ReferenceItem from "./ReferenceItem";

import includes from "lodash.includes";
import filter from "lodash.filter";
import without from "lodash.without";

import colors from "./colors";

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

function handleChange ({target}) {
  this.setState({ predicate: target.value });
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
      <div>
        <label>
          <SearchInput
            onChange={handleChange.bind(this)}
            predicate={this.state.predicate}
          />
        </label>

        <CategoryList>
          {this.props.categories.map(({ name, key }, i) =>
            <CategoryButton
              active={includes(this.state.categories, key)}
              key={i}
              name={name}
              onToggle={handleCategoryChange.bind(this)}
            />
          )}
        </CategoryList>

        <section>
          {this.filteredResults.length ? (
            this.filteredResults.map((item, i) =>
              <ReferenceArticle>
                <ReferenceItem
                  key={i}
                  {...item}
                />
              </ReferenceArticle>
            )
          ) : (
            <Article>
              <h2>No results</h2>
            </Article>
          )}
        </section>
      </div>
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

// private

const CategoryList = props =>
  <div
    {...props}
    style={{
      padding: "1.5em 0",
      borderColor: colors.zircon,
      borderStyle: "solid",
      borderWidth: "0 0 1px 0",
    }}
  />

const ReferenceArticle = ({
  style,
  ...props,
}) =>
  <article
    {...props}
    style={{
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      borderBottomColor: colors.zircon,
      ...style,
    }}
  />

const Article = ({
  style,
  ...props,
}) =>
  <article
    {...props}
    style={{
      paddingTop: "1em",
      paddingBottom: "1em",
      ...style,
    }}
  />

const TextInput = props =>
  <input {...props} type="text" />

const AutofocusedTextInput = props =>
  <TextInput {...props} autoFocus />

const SearchInput = ({
  onChange,
  predicate,
})=>
  <AutofocusedTextInput
    onChange={onChange}
    placeholder="Filter by name"
    style={{
      width: "100%",
      padding: "1em",
      fontSize: "1em",
      borderRadius: 2,
      borderColor: colors.lightGray,
      borderStyle: "solid",
      borderWidth: "1px",
      boxSizing: "border-box",
      color: "black",
    }}
    value={predicate}
  />

export default ReactCheatSheet;
