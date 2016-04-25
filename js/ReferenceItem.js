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
  exampleColorCode: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: 4,
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
  color: backgroundColor,
  notAvailableInComponentClass,
  cannotCallSetState,
  refsNotAvailable,
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
        <div style={{backgroundColor, ...styles.exampleColorCode}} />
      </pre>
    }

    {(chart) &&
      <div>
        {chart}
      </div>
    }

    <div>
      {(notAvailableInComponentClass) && <span style={{color: "#e06c75"}}><strong>{'︎✖︎ React.Component'}</strong></span>}
      {(cannotCallSetState) && <span style={{color: "#e06c75"}}><strong>{'︎✖︎ this.setState()'}</strong></span>}
      {(refsNotAvailable) && <span style={{color: "#e06c75"}}><strong>{'︎✖︎ refs'}</strong></span>}
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
         <i className="my-fa-1.5x my-fa fa fa-code" />
       </a>
      }
      {(href) &&
        <a
          className="reference-item"
          href={href}
          style={styles.referenceLink}
          target="_blank"
        >
         <i className="my-fa-1.5x my-fa fa fa-file-text-o" />
       </a>
      }
    </div>
  </article>
);

ReferenceItem.propTypes = {
  example: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  cannotCallSetState: PropTypes.bool,
  chart: PropTypes.node,
  color: PropTypes.string,
  module: PropTypes.string,
  notAvailableInComponentClass: PropTypes.bool,
  playground: PropTypes.string,
  reference: PropTypes.string,
  refsNotAvailable: PropTypes.bool,
  notSupported: PropTypes.string,
};

export default ReferenceItem;
