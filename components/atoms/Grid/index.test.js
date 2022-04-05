<<<<<<< HEAD
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
=======
import React from 'react';
import renderer from 'react-test-renderer';
import Grid from '.'
it('Grid renders correctly', () => {
    const tree = renderer
      .create(<Grid><button>test1</button><button>test1</button></Grid>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});
>>>>>>> b9cde6f17d12c509c1e9bb7145254a0b4fa476c1
