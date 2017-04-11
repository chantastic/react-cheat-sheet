import React from "react";
import cxs from "cxs";

const NoResults = () => (
  <article className={cxs({ paddingTop: "8px", paddingBottom: "8px" })}>
    <h2 className={cxs({ fontWeight: 800 })}>No results</h2>
  </article>
);

export default NoResults;
