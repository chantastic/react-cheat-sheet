import React, { PropTypes } from "react";
import colors from "./colors";

const ReferenceItem = ({
  name,
  module,
  reference: href,
  example,
  chart,
  playground,
  notSupported,
}) =>
  <div>
    <Heading>{name}</Heading>

    <Resources>
      <Package>{module}</Package>

      <Reference>
        {playground &&
          <ReferenceLink href={playground}>example</ReferenceLink>
        }
        {href &&
          <ReferenceLink href={href}>example</ReferenceLink>
        }
      </Reference>
    </Resources>

    {example &&
      <Example>
        <ExampleCode>{example}</ExampleCode>
      </Example>
    }

    {chart &&
      <div>{chart}</div>
    }

    {notSupported &&
      <NotSupported>
        <strong>{`\u2716 ${notSupported}`}</strong>
      </NotSupported>
    }
  </div>

ReferenceItem.propTypes = {
  example: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  chart: PropTypes.node,
  module: PropTypes.string,
  notSupported: PropTypes.string,
  playground: PropTypes.string,
  reference: PropTypes.string,
};

// private

const Example = props =>
  <pre
    {...props}
    style={{
      position: "relative",
      overflow: "hidden",
      overflowX: "auto",
      backgroundColor: colors.charade,
      color: "white",
      padding: "1.2em",
      borderRadius: 2,
    }}
  />

const ExampleCode = props =>
  <code
    {...props}
    style={{
      fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
      color: colors.gainsboro,
    }}
  />

const Heading = props =>
  <h2
    {...props}
    style={{
      overflowX: "auto",
      marginBottom: 0,
    }}
  />

const Package = props =>
  <div
    {...props}
    style={{
      display: "table-cell",
      fontSize: "1em",
      color: colors.lightGray,
      fontWeight: "normal",
    }}
  />

const Reference = props =>
  <div
    {...props}
    style={{
      display: "table-cell",
      textAlign: "right",
    }}
  />

const ReferenceLink = props =>
  <a
    {...props}
    className="reference-item"
    style={{paddingLeft: "1.2em"}}
    target="_blank"
  />

const Resources = props =>
  <div
    {...props}
    style={{
      display: "table",
      width: "100%",
    }}
  />

const NotSupported = props =>
  <div
    {...props}
    style={{
      color: colors.red,
      marginBottom: "1rem",
    }}
  />


export default ReferenceItem;
