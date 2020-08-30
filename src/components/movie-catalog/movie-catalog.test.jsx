import React from 'react';
import renderer from 'react-test-renderer';

import MovieCatalog from './movie-catalog.jsx';

const Mock = () => <div className="mock"></div>;

it(`Render MovieCatalog`, () => {
  const tree = renderer.create(
      <MovieCatalog>
        <Mock />
      </MovieCatalog>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
