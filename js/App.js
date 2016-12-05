import React, { Component, PropTypes } from "react"

import includes from "lodash.includes"
import cx from "classnames"

import ReactCheatSheet from "./ReactCheatSheet.js"

import categories from "./categories.js"
import data from "./data.js"

const App = () =>
  <main className="p-2">
    <h1 className="fw-900 my-2">
      <span className="c-gray9">React Cheat Sheet</span>{' '}
      <small className="c-gray5 fs-.5e">v15</small>
    </h1>

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
          <input
            autoFocus
            placeholder="Filter by name"
            type="text"
            className="p-2 c-black bw-1p bc-gray5 w-100% bs-bb br-2p"
            onChange={handleSearchChange}
            value={searchPredicate}
            onChange={e => handleSearchChange(e.target.value)}
          />

          <CategoryList>
            {categories.map(({ name, key }, i) => (
              <CategoryButton
                active={includes(selectedCategories, key)}
                key={i}
                name={name}
                onToggle={(category, checked) => handleCategoryChange(category, checked)}
              />
            ))}
          </CategoryList>

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

    <footer className="my-2 py-1r pb-2">
  <a
    className="reference-item"
    href="https://twitter.com/chantastic"
    target="_blank"
  >
    ❤ @chantastic
  </a>
    </footer>
  </main>

// private

const CategoryList = (props) =>
  <div
    className="my-2 pb-2 bw-0 bbw-1p bc-gray3"
    {...props}
  />

class CategoryButton extends Component {
  render () {
    const {
      active,
      name,
      onToggle,
    } = this.props;

    return (
      <CategoryLabel active={active} >
        <span className={active ? "c-gray9" : "c-white"}>{name + " "}</span>
        <input
          checked={active}
          onChange={e => onToggle(name.replace(/[^a-z0-9]/gi,"").toUpperCase(), e.target.checked)}
          type="checkbox"
        />
      </CategoryLabel>
    )
  }
}

CategoryButton.propTypes = {
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
}

const CategoryLabel = (props) => (
  <label
    className={cx(
      "btn mt-1 mr-1 c-white br-2p",
      props.active ? "gc-yellow4" : "gc-gray5"
    )}
    {...props}
  />
)

CategoryLabel.propTypes = {
  active: PropTypes.bool.isRequired,
}

const NoResults = () =>
  <article className="py-2">
    <h2 className="fw-800">No results</h2>
  </article>

const ReferenceItem = ({
  name,
  module,
  reference: href,
  example,
  chart,
  playground,
  notSupported,
}) =>
  <article className="py-2 bw-0 bbw-1p bc-gray3">
    <h2 className="my-1 ox-a fw-800">
      {name}
    </h2>

    <div className="d-t w-100% my-1">
      <div className="c-gray5 d-tc fw-n">{module}</div>

      <div className="d-tc ta-r">
        {(playground) &&
          <a
            className="reference-item pl-2"
            href={playground}
            target="_blank"
          >
          example
        </a>
        }
        {(href) &&
          <a
            className="reference-item pl-2"
            href={href}
            target="_blank"
          >
          docs
        </a>
        }
      </div>
    </div>

    {(example) &&
      <pre className="my-2 p-2 c-white gc-gray9 p-r o-h ox-a br-2p">
        <code className="c-gray2 ff-system-mono">{example}</code>
      </pre>
    }

    {(chart) &&
      <div className="my-2">
        {chart}
      </div>
    }

    <div className="my-2">
      {(notSupported) && (
        <span className="c-red8 fw-800">
          <strong>{`\u2716 ${notSupported}`}</strong>
        </span>
      )}
    </div>
  </article>

ReferenceItem.propTypes = {
  example: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  chart: PropTypes.node,
  module: PropTypes.string,
  notSupported: PropTypes.string,
  playground: PropTypes.string,
  reference: PropTypes.string,
}

export default App
