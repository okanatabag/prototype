import React from 'react';
import renderer from 'react-test-renderer';
import Title from '.'
it('Title renders correctly', () => {
    const tree = renderer
      .create(<Title size="5" mrg="5px" color="#ff0000">Test</Title>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});