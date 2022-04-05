import React from "react";
import renderer from "react-test-renderer";
import Grid from ".";

it("Grid renders correctly", () => {
	const tree = renderer
		.create(
			<Grid>
				<button type="button">test1</button>
				<button type="button">test1</button>
			</Grid>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
