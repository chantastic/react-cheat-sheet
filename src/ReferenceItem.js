import React from 'react';
import { article as articleStyle } from './styles';

const styles = {
  root: {
    ...articleStyle,
    borderBottom: '1px solid #333'
  },
  module: {
    marginLeft: '.5em',
    fontSize: '1em',
    color: '#aaa',
    fontWeight: 'normal',
  },
  example: {
    backgroundColor: '#333',
    color: 'white',
    padding: 20,
    borderRadius: 2,
  },
  code: {
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
  },
  reference: {
    textAlign: 'right'
  }
};

const ReferenceItem = ({name, module, reference: href, example}) => (
  <article style={styles.root}>
    <h2>
      {name}
      <span style={styles.module}>{module}</span>
    </h2>

    <pre style={styles.example}>
      <code style={styles.code}>{example}</code>
    </pre>

    <div style={styles.reference}>
      {(href) && <a href={href} target="_blank">Reference</a>}
    </div>
  </article>
);

export default ReferenceItem;
