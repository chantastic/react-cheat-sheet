import React from "react";
import { string, node } from "prop-types";
import styled from "styled-components";

const Container = styled.article`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #dee2e6;
`;

const Title = styled.h2`
  margin: .5rem 0;
  font-weight: 800;
`;

const Details = styled.div`
  margin: .5rem 0;
`;

const Module = styled.div`
  font-weight: 400;
  color: #adb5bd;
`;

const DetailsRight = styled.div`
  float: right;
`;

const DocsLink = styled.a`
  padding-left: 1rem;
  &, &:visited {
    color: #228ae6;
  }
`;

const Example = styled.pre`
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 2px;
  background-color: #212529;
  color: #fff;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: pre;
`;

const Code = styled.code`
  color: #e9ecef;
`;

const NotSupported = styled.span`
  font-weight: 800;
  color: #e03131;
`;

const Chart = styled.div`
  margin: 1rem 0;
`;

const ReferenceItem = (
  {
    name,
    module,
    reference: href,
    example,
    chart,
    playground,
    notSupported,
  }
) => (
  <Container>
    <Title>{name}</Title>

    <Details>
      <DetailsRight>
        {playground &&
          <DocsLink href={playground} target="_blank">
            example
          </DocsLink>}
        {href &&
          <DocsLink href={href} target="_blank">
            docs
          </DocsLink>}
      </DetailsRight>
      <Module>{module}</Module>
    </Details>

    {example &&
      <Example>
        <Code>{example}</Code>
      </Example>}

    {chart &&
      <Chart>
        {chart}
      </Chart>}

    {notSupported &&
      <NotSupported>
        <strong>{`\u2716 ${notSupported}`}</strong>
      </NotSupported>}
  </Container>
);

ReferenceItem.propTypes = {
  example: string.isRequired,
  name: string.isRequired,

  chart: node,
  module: string,
  notSupported: string,
  playground: string,
  reference: string,
};

export default ReferenceItem;
