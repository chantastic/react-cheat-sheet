import React from "react";
import cxs from "cxs";

const ReferenceItem = ({
  name,
  module,
  reference: href,
  example,
  chart,
  playground,
  notSupported,
}) => (
  <article
    className={cxs({
      paddingTop: "1rem",
      paddingBottom: "1rem",
      borderWidth: 0,
      borderBottomWidth: "1px",
      borderStyle: "solid",
      borderColor: "#dee2e6",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    })}
  >
    <h2
      className={cxs({
        margin: ".5rem 0",
        fontWeight: 800,
      })}
    >
      {name}
    </h2>

    <div
      className={cxs({
        margin: ".5rem 0",
      })}
    >
      <div className={cxs({ float: "right" })}>
        {playground && (
          <a
            className={cxs({
              paddingLeft: "1rem",
              ":visited": {
                color: "#1b6ec2",
              },
            })}
            href={playground}
            target="_blank"
            rel="noopener noreferrer"
          >
            example
          </a>
        )}
        {href && (
          <a
            className={cxs({
              paddingLeft: "1rem",
            })}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
          >
            docs
          </a>
        )}
      </div>
      <div
        className={cxs({
          fontWeight: 400,
          color: "#6a7884",
        })}
      >
        {module}
      </div>
    </div>

    {example && (
      <pre
        className={cxs({
          padding: "1rem",
          margin: "1rem 0",
          borderRadius: "2px",
          backgroundColor: "#39424a",
          color: "#fff",
          position: "relative",
          overflowX: "auto",
          overflowY: "hidden",
          whiteSpace: "pre",
        })}
      >
        <code
          className={cxs({
            color: "#e9ecef",
          })}
        >
          {example}
        </code>
      </pre>
    )}

    {chart && (
      <div
        className={cxs({
          margin: "1rem 0",
        })}
      >
        {chart}
      </div>
    )}

    {notSupported && (
      <span
        className={cxs({
          fontWeight: 800,
          color: "#e03131",
        })}
      >
        <strong>{`\u2716 ${notSupported}`}</strong>
      </span>
    )}
  </article>
);

export default ReferenceItem;
