import React from 'react';
import renderer from 'react-test-renderer';
import Container from '.'
it('renders correctly', () => {
    const tree = renderer
      .create(<Container bg="#000000">Test</Container>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});