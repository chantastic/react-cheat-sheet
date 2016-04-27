import React, { PropTypes } from "react";

const ReferenceItem = ({
  name,
  module,
  reference: href,
  example,
  chart,
  playground,
  notSupported,
}) => (
  <article className="py-1r bw-0 bc-l.9 bbw-1p">
    <h2 className="o-a mb-0">{name}</h2>

    <div className="d-t w-100%">
      <div className="d-tc c-l.6">{module}</div>

      <div className="d-tc ta-r">
        {(playground) &&
          <a
            className="reference-item pl-1.2r"
            href={playground}
            target="_blank"
          >
          example
        </a>
        }
        {(href) &&
          <a
            className="reference-item pl-1.2r"
            href={href}
            target="_blank"
          >
          docs
        </a>
        }
      </div>
    </div>

    {(example) &&
      <pre className="p-r p-1.2 o-h ox-a gc-l.2 c-l bs-2p">
        <code className="monospace c-l.8">{example}</code>
      </pre>
    }

    {(chart) && <div>{chart}</div>}

    <div>
      {(notSupported) && (
        <span className="c-red">
          <strong>{`\u2716 ${notSupported}`}</strong>
        </span>
      )}
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
