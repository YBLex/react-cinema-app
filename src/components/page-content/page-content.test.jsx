import React from 'react';
import renderer from 'react-test-renderer';

import PageContent from './page-content.jsx';

const Mock = () => <div className="mock"></div>;

it(`Render PageContent`, () => {
  const tree = renderer.create(
      <PageContent>
        <Mock />
      </PageContent>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
