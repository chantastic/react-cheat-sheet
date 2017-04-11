import {
  Children,
  Component,
} from 'react';
import {
  arrayOf,
  object,
  shape,
  string,
} from 'prop-types';

import { filter, without } from 'lodash';
import filterByCategory from '../helpers/filterByCategory';

class ReactCheatSheet extends Component {

  static propTypes = {
    categories: arrayOf(
      shape({
        key: string.isRequired,
        name: string.isRequired,
      })
    ),
    data: arrayOf(object).isRequired,
  }

  constructor() {
    super()

    this.state = {
      predicate: "",
      categories: [],
    }
  }

  render () {

    const {
      children,
      data,
    } = this.props

    const {
      categories,
      predicate,
    } = this.state

    return Children.only(
      children({
        selectedCategories: categories,
        filteredResults: filter(
          filterByCategory(data, categories),
          ({name}) => name.match(new RegExp(predicate, "i"))
        ),
        handleCategoryChange: (category, checked) => (
          this.setState({
            categories: checked
              ? categories.concat([category])
              : without(categories, category)
          })),
        searchPredicate: predicate,
        handleSearchChange: newValue => this.setState({predicate: newValue}),
      })
    )
  }
}

export default ReactCheatSheet;
