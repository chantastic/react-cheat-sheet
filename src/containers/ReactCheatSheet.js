import { Children, Component } from "react";

import { filter, without } from "lodash";
import filterByCategory from "../helpers/filterByCategory";

class ReactCheatSheet extends Component {
  state = {
    predicate: "",
    categories: [],
  };

  render() {
    const { children, data } = this.props;

    const { categories, predicate } = this.state;

    return Children.only(
      children({
        selectedCategories: categories,
        filteredResults: filter(
          filterByCategory(data, categories),
          ({ name }) => name.match(new RegExp(predicate, "i"))
        ),
        handleCategoryChange: (category, checked) =>
          this.setState({
            categories: checked
              ? categories.concat([category])
              : without(categories, category),
          }),
        searchPredicate: predicate,
        handleSearchChange: newValue => this.setState({ predicate: newValue }),
        categories: data.reduce(
          (acc, { category }) =>
            acc.indexOf(category) === -1 ? acc.concat([category]) : acc,
          []
        ),
      })
    );
  }
}

export default ReactCheatSheet;
