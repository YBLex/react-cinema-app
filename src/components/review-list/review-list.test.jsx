import React from 'react';
import renderer from 'react-test-renderer';

import ReviewList from './review-list.jsx';

const reviews = [
  {
    author: `Kate Muir`,
    date: `December 24, 2016`,
    rating: `8,9`,
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  },
  {
    author: `Bill Goodykoontz`,
    date: `November 18, 2015`,
    rating: `8,0`,
    text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  },
  {
    author: `Amanda Greever`,
    date: `November 18, 2015`,
    rating: `9,9`,
    text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
  },
  {
    author: `Matthew Lickona`,
    date: `December 20, 2016`,
    rating: `7,2`,
    text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
  },
  {
    author: `Paula Fleri-Soler`,
    date: `December 20, 2016`,
    rating: `7,9`,
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
  },
  {
    author: `Paula Fleri-Soler`,
    date: `December 29, 2016`,
    rating: `10`,
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
  },
];

it(`Rende ReviewList`, () => {
  const tree = renderer.create(<ReviewList
    reviews = {reviews}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
