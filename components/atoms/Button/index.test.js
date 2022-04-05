import React from "react";
import renderer from "react-test-renderer";
import Button from ".";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Button size="2" tc="#ffffff" bg="#000000">
        Test
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
