import React from 'react';
import renderer from 'react-test-renderer';

import {GenreTabList} from './tab-list.jsx';

const genres = [
  `Comedy`,
  `Criminal`,
  `Drama`,
];

it(`Render GenreTabList`, () => {
  const tree = renderer
    .create(<GenreTabList
      genres={genres}
      onGenreClick={() => {}}
      activeItem=""
      onSetActive={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
