import React, { Component } from "react";
import cxs from "cxs";

import { includes } from "lodash";

import data from "./data.js";

import ReactCheatSheet from "./containers/ReactCheatSheet";
import CategoryFilter from "./components/CategoryFilter";
import ReferenceItem from "./components/ReferenceItem";
import SearchInput from "./components/SearchInput";
import NoResults from "./components/NoResults";

class App extends Component {
  render() {
    return (
      <main
        className={cxs({
          fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
          margin: "0 auto",
          maxWidth: "720px",
        })}
      >
        <div className={cxs({ padding: "1rem" })}>
          <h1
            className={cxs({
              marginBottom: "1rem",
              color: "#212529",
              fontWeight: 900,
              fontSize: "2em",
            })}
          >
            React Cheat Sheet{" "}
            <small
              className={cxs({
                color: "#6a7884",
                fontSize: ".5em",
              })}
            >
              v15.5
            </small>
          </h1>

          <ReactCheatSheet data={data}>
            {(
              {
                categories,
                selectedCategories,
                filteredResults,
                handleCategoryChange,
                searchPredicate,
                handleSearchChange,
              }
            ) => (
              <div>
                <SearchInput
                  searchPredicate={searchPredicate}
                  handleSearchChange={handleSearchChange}
                />

                <div>
                  {categories.map((name, i) => (
                    <CategoryFilter
                      active={includes(selectedCategories, name)}
                      key={i}
                      name={name}
                      onToggle={(category, checked) =>
                        handleCategoryChange(category, checked)}
                    />
                  ))}
                </div>

                <section>
                  {filteredResults.length
                    ? filteredResults.map((item, i) => (
                        <ReferenceItem key={i} {...item} />
                      ))
                    : <NoResults />}
                </section>
              </div>
            )}
          </ReactCheatSheet>

          <footer
            className={cxs({
              paddingBottom: "1rem",
              margin: "1rem 0",
            })}
          >
            A free{' '}
            <a
              href="https://twitter.com/chantastic"
              rel="noopener"
              target="_blank"
            >
              learnreact.com
            </a>
            {' '}resource.
          </footer>
        </div>
      </main>
    );
  }
}

export default App;
