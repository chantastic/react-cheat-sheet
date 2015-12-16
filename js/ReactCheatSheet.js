import React, { Component, PropTypes } from 'react';

import data from './data.js';

import styles from './styles';
import colors from './colors';

import ReferenceItem from './ReferenceItem.js';
import CategoryList from './CategoryList.js';
import CategoryButton from './CategoryButton.js';
import NoResults from './NoResults.js';

import includes from 'lodash.includes';
import filter from 'lodash.filter';
import without from 'lodash.without';

function filterByCategory(_data, categories = []) {
  if (!categories.length) return _data;

  return filter(_data, ({category}) => includes(categories, category));
}

function filterResults (_data, predicate = '', categories = []) {
  return filter(filterByCategory(_data, categories), (({name}) => {
    return name.match(new RegExp(predicate, 'i'));
  }));
}

function toggleCategory(arr, item, cond) {
  return (cond) ? arr.concat([item]) : without(arr, item);
}

function handleChange () {
  this.setState({ predicate: this.searchInput.value });
}

function handleCategoryChange (category, state) {
  this.setState({
    categories: toggleCategory(this.state.categories, category, state)
  });
}

class ReactCheatSheet extends Component {
  constructor (props) {
    super(props);

    this.state = {
      predicate: '',
      categories: [],
    };
  }

  get filteredResults () {
    return filterResults(data, this.state.predicate, this.state.categories);
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
          <CategoryButton
            color={colors.purple}
            name={'ReactDOM'}
            active={includes(this.state.categories, 'REACTDOM')}
            onToggle={handleCategoryChange.bind(this)}
          />

          <CategoryButton
            color={colors.yellow}
            name={'Top-level'}
            nameStyle={(includes(this.state.categories, 'TOPLEVEL')) ? { color: "#222" } : null}
            active={includes(this.state.categories, 'TOPLEVEL')}
            onToggle={handleCategoryChange.bind(this)}
          />

          <CategoryButton
            color={colors.blue}
            name={'COMPONENT'}
            active={includes(this.state.categories, 'COMPONENT')}
            onToggle={handleCategoryChange.bind(this)}
          />

          <CategoryButton
            color={colors.olive}
            name={'SPEC'}
            active={includes(this.state.categories, 'SPEC')}
            onToggle={handleCategoryChange.bind(this)}
          />

          <CategoryButton
            color={colors.orange}
            name={'Lifecycle'}
            active={includes(this.state.categories, 'LIFECYCLE')}
            onToggle={handleCategoryChange.bind(this)}
          />

          <CategoryButton
            color={colors.pink}
            name={'PropTypes'}
            active={includes(this.state.categories, 'PROPTYPES')}
            onToggle={handleCategoryChange.bind(this)}
          />

          <CategoryButton
            color={colors.pink}
            name={'Test-utils'}
            active={includes(this.state.categories, 'TESTUTILS')}
            onToggle={handleCategoryChange.bind(this)}
          />

          <CategoryButton
            color={colors.red}
            name={'Misc'}
            active={includes(this.state.categories, 'MISC')}
            onToggle={handleCategoryChange.bind(this)}
          />
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

export default ReactCheatSheet;
