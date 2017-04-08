import React, { Component } from 'react';
import styled from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';

import { includes } from 'lodash';

import categories from './data/categories.js';
import data from './data.js';

import ReactCheatSheet from './containers/ReactCheatSheet';
import CategoryFilter from './components/CategoryFilter';
import ReferenceItem from './components/ReferenceItem';
import SearchInput from './components/SearchInput';
import NoResults from './components/NoResults';

const AppWrapper = styled.main`
  font-family: -apple-system,BlinkMacSystemFont,sans-serif;
  margin: 0 auto;
  max-width: 720px;
`;

const AppPadding = styled.div`
  padding: 1rem;
`;

const MainHeading = styled.h1`
  margin-top: 1rem;
  margin-bottom: 1rem;

  color: #212529;
  font-weight: 900;
  font-size: 2em;
`;

const MainHeadingVersion = styled.small`
  color: #adb5bd;
  font-size: .5em;
`;

const Footer = styled.footer`
  padding-bottom: 1rem;
  margin: 1rem 0;
`;

const Contributor = styled.a`
  color: #228ae6;
`

// end of styles

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
          <AppPadding>
            <MainHeading>
              React Cheat Sheet{' '}
              <MainHeadingVersion>v15</MainHeadingVersion>
            </MainHeading>

            <ReactCheatSheet
              categories={categories}
              data={data}
            >
              {({
                selectedCategories,
                filteredResults,
                handleCategoryChange,
                searchPredicate,
                handleSearchChange,
              }) =>
                <div className="my-2">
                  <SearchInput
                    searchPredicate={searchPredicate}
                    handleSearchChange={handleSearchChange}
                  />

                  <div>
                    {categories.map(({ name, key }, i) => (
                      <CategoryFilter
                        active={includes(selectedCategories, key)}
                        key={i}
                        name={name}
                        categories={selectedCategories}
                        onToggle={(category, checked) => handleCategoryChange(category, checked)}
                      />
                    ))}
                  </div>

                  <section>
                    {(filteredResults.length) ? (
                      filteredResults.map((item, i) => (
                        <ReferenceItem key={i} {...item} />
                      ))
                    ) : (
                      <NoResults />
                    )}
                  </section>
                </div>
              }
            </ReactCheatSheet>

            <Footer>
              <Contributor
                href="https://twitter.com/chantastic"
                target="_blank"
              >
                ❤ @chantastic
              </Contributor>
            </Footer>
          </AppPadding>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
