import React from 'react';
import { article as articleStyle } from './styles';
import Prism from './vendor/Prism';

const styles = {
  root: {
    ...articleStyle,
    borderBottom: '1px solid #e0e0e0'
  },
  header: {
    overflowX: 'auto',
    marginBottom: 0,
  },
  module: {
    fontSize: '1em',
    color: '#aaa',
    fontWeight: 'normal',
    marginBottom: '1.5em'
  },
  example: {
    position: 'relative',
    overflow: 'hidden',
    overflowX: 'auto',
    backgroundColor: 'rgb(40, 44, 52)',
    color: 'white',
    padding: 20,
    borderRadius: 2,
  },
  exampleColorCode: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: 4
  },
  code: {
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
  },
  reference: {
    textAlign: 'right'
  }
};

const ReferenceItem = ({name, module, reference: href, example, color: backgroundColor, notAvailableInComponentClass, cannotCallSetState, video}) => (
  <article style={styles.root}>
    <h2 style={styles.header}>
      {name}
    </h2>
    <div style={styles.module}>{module}</div>

    <pre style={styles.example}>
      <code style={styles.code}><Prism>{example}</Prism></code>
      <div style={{backgroundColor, ...styles.exampleColorCode}} />
    </pre>

    <div>
      {(notAvailableInComponentClass) && <span style={{color: "#e06c75"}}><strong>{'︎✖︎ React.Component'}</strong></span>}
      {(cannotCallSetState) && <span style={{color: "#e06c75"}}><strong>{'︎✖︎ this.setState()'}</strong></span>}
    </div>

    <div style={styles.reference}>
      {(href) && <a href={href} style={{color: "#56b6c2"}} target="_blank">Go to docs</a>}
    </div>

    <div>
      <a href={video} target="_blank"> Watch a short video on {name}.</a>
    </div>
  </article>
);

export default ReferenceItem;
