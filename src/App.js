import React, { Component } from "react";
import cxs from "cxs";

import { includes } from "lodash";

import categories from "./data/categories.js";
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
                color: "#adb5bd",
                fontSize: ".5em",
              })}
            >
              v15
            </small>
          </h1>

          <ReactCheatSheet categories={categories} data={data}>
            {(
              {
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
                  {categories.map(({ name, key }, i) => (
                    <CategoryFilter
                      active={includes(selectedCategories, key)}
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
            <a
              classname={cxs({
                color: "#228ae6",
              })}
              href="https://twitter.com/chantastic"
              rel="noopener"
              target="_blank"
            >
              ❤ @chantastic
            </a>
          </footer>
        </div>
      </main>
    );
  }
}

export default App;
