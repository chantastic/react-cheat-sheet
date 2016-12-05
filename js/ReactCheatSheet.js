import React, {
  Children,
  Component,
  PropTypes
} from "react"

import filter from "lodash.filter"
import includes from "lodash.includes"
import without from "lodash.without"

const filterByCategory = (_data, categories = []) =>
  (categories.length)
    ? filter(_data, ({category}) => includes(categories, category))
    : _data

class ReactCheatSheet extends Component {
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

const {
  arrayOf,
  object,
  shape,
  string,
} = PropTypes

ReactCheatSheet.propTypes = {
  categories: arrayOf(
    shape({
      key: string.isRequired,
      name: string.isRequired,
    })
  ),
  data: arrayOf(object).isRequired,
}

export default ReactCheatSheet
