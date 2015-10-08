import React from 'react';
import { article as articleStyle } from './styles';
import Prism from './vendor/Prism';

const styles = {
  root: {
    ...articleStyle,
    borderBottom: '1px solid #333'
  },
  header: {
    overflowY: 'scroll'
  },
  module: {
    marginLeft: '.5em',
    fontSize: '1em',
    color: '#aaa',
    fontWeight: 'normal',
  },
  example: {
    position: 'relative',
    overflow: 'hidden',
    overflowX: 'scroll',
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

const ReferenceItem = ({name, module, reference: href, example, color: backgroundColor}) => (
  <article style={styles.root}>
    <h2 style={styles.header}>
      {name}
      <span style={styles.module}>{module}</span>
    </h2>

    <pre style={styles.example}>
      <code style={styles.code}><Prism>{example}</Prism></code>
      <div style={{backgroundColor, ...styles.exampleColorCode}} />
    </pre>

    <div style={styles.reference}>
      {(href) && <a href={href} target="_blank">Read more &#8594;</a>}
    </div>
  </article>
);

export default ReferenceItem;
