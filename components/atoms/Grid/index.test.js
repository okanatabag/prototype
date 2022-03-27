import React from 'react';
import renderer from 'react-test-renderer';
import Grid from '.'
it('Grid renders correctly', () => {
    const tree = renderer
      .create(<Grid><button>test1</button><button>test1</button></Grid>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});