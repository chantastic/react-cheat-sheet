import React from "react";
import {
  scryRenderedDOMComponentsWithTag,
  isElementOfType,
  renderIntoDocument,
} from "react-addons-test-utils";
import assert from "assert";
import ReactCheatSheet from "../js/ReactCheatSheet.js";

const componentTree = renderIntoDocument(<ReactCheatSheet />);
const allEntries = scryRenderedDOMComponentsWithTag(
  componentTree,
  'ARTICLE'
);

describe("ReferenceItem", () => {
  it("renders name, when passed in", () => {
    assert.strictEqual(allEntries.length, 77);
  });
});
