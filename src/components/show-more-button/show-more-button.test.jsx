import React from 'react';
import renderer from 'react-test-renderer';

import ShowMoreButton from './show-more-button.jsx';

it(`Render ShowMoreButton`, () => {
  const tree = renderer.create(
      <ShowMoreButton />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
