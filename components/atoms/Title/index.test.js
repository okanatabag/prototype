<<<<<<< HEAD
import React from "react";
import renderer from "react-test-renderer";
import Title from ".";

it("Title renders correctly", () => {
	const tree = renderer
		.create(
			<Title size="5" mrg="5px" color="#ff0000">
				Test
			</Title>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
=======
import React from 'react';
import renderer from 'react-test-renderer';
import Title from '.'
it('Title renders correctly', () => {
    const tree = renderer
      .create(<Title size="5" mrg="5px" color="#ff0000">Test</Title>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});
>>>>>>> b9cde6f17d12c509c1e9bb7145254a0b4fa476c1
