import React, { Component } from 'react';
import { article as articleStyle } from './styles';
import filter from 'lodash.filter';
import data from './data.js';
import ReferenceItem from './ReferenceItem.js';

function filterResults (predicate, _data) {
  return filter(_data, (({name}) => {
    return name.match(new RegExp(predicate, 'i'));
  }));
}

const inputStyle = {
  width: "100%",
  padding: 10,
  fontSize: "1em",
  borderRadius: 2,
  border: "1px solid #aaa",
  boxSizing: "border-box",
  color: "black",
}

class ReactCheatSheet extends Component {
  constructor (props) {
    super(props);

    this.state = {
      predicate: ''
    };

    this.handleChange = () => {
      this.setState({ predicate: this.searchInput.getDOMNode().value });
    };
  }

  get filteredResults () {
    return filterResults(this.state.predicate, data);
  }

  render () {
    const noResults = () => (
      <article style={{ ...articleStyle }}>
        <h2>No results</h2>
      </article>
    );

    const results = () => (
      this.filteredResults.map((item, i) => <ReferenceItem key={i} {...item} />)
    );

    return (
      <main>
        <label>
          <input
            autoFocus
            type="text"
            style={inputStyle}
            placeholder="Filter by name"
            value={this.state.predicate}
            ref={c => this.searchInput = c}
            onChange={this.handleChange}
          />
          <div>
            <small style={{ color: "#999" }}>* using case-insensitive regex match</small>
          </div>
        </label>

        <section>
          {(this.filteredResults.length)
           ? results()
           : noResults()
          }
        </section>
      </main>
    );
  }
}

export default ReactCheatSheet;
