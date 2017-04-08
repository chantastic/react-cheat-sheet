import {
  Children,
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

const {
  arrayOf,
  object,
  shape,
  string,
} = PropTypes;

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
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    // const hasCategories = (props.location.search.match(/categories/))
    // const categories = () ?  : [];
    const qs = queryString.parse(props.location.search);
    const categories = (qs.categories) ? qs.categories.split(',') : [];

    this.state = {
      predicate: "",
      categories,
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
          })
        ),
        searchPredicate: predicate,
        handleSearchChange: newValue => this.setState({predicate: newValue}),
      })
    )
  }
}

export default withRouter(ReactCheatSheet);
