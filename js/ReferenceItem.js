import React, { PropTypes } from "react";
import articleStyles from "./styles";
import Prism from "./vendor/Prism";

const styles = {
  root: {
    ...articleStyles.article,
    borderBottom: "1px solid #e0e0e0",
  },
  header: {
    overflowX: "auto",
    marginBottom: 0,
  },
  module: {
    fontSize: "1em",
    color: "#aaa",
    fontWeight: "normal",
    marginBottom: "1.5em",
  },
  example: {
    position: "relative",
    overflow: "hidden",
    overflowX: "auto",
    backgroundColor: "rgb(40, 44, 52)",
    color: "white",
    padding: "1.2em",
    borderRadius: 2,
  },
  code: {
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
  },
  reference: {
    textAlign: "right",
  },
  referenceLink: {
    paddingLeft: "1.2em",
  },
};

const ReferenceItem = ({
  name,
  module,
  reference: href,
  example,
  chart,
  playground,
  notSupported,
}) => (
  <article style={styles.root}>
    <h2 style={styles.header}>
      {name}
    </h2>

    <div style={styles.module}>{module}</div>

    {(example) &&
      <pre style={styles.example}>
        <code style={styles.code}><Prism>{example}</Prism></code>
      </pre>
    }

    {(chart) &&
      <div>
        {chart}
      </div>
    }

    <div>
      {(notSupported) && <span style={{color: "#e06c75"}}><strong>{`︎✖︎ ${notSupported}`}</strong></span>}
    </div>

    <div style={styles.reference}>
      {(playground) &&
        <a
          className="reference-item"
          href={playground}
          style={styles.referenceLink}
          target="_blank"
        >
         example
       </a>
      }
      {(href) &&
        <a
          className="reference-item"
          href={href}
          style={styles.referenceLink}
          target="_blank"
        >
         docs
       </a>
      }
    </div>
  </article>
);

ReferenceItem.propTypes = {
  example: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  chart: PropTypes.node,
  module: PropTypes.string,
  notSupported: PropTypes.string,
  playground: PropTypes.string,
  reference: PropTypes.string,
};

export default ReferenceItem;
