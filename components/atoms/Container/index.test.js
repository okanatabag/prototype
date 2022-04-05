<<<<<<< HEAD
import React from "react";
import renderer from "react-test-renderer";
import Container from ".";

it("renders correctly", () => {
	const tree = renderer
		.create(<Container bg="#000000">Test</Container>)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
=======
import React from 'react';
import renderer from 'react-test-renderer';
import Container from '.'
it('renders correctly', () => {
    const tree = renderer
      .create(<Container bg="#000000">Test</Container>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});
>>>>>>> b9cde6f17d12c509c1e9bb7145254a0b4fa476c1
