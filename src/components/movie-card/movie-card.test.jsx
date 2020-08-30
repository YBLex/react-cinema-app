import React from 'react';
import renderer from 'react-test-renderer';

import MovieCard from './movie-card.jsx';

const mockMovie = {
  id: 0,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  desctiption: [
    `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.`,
    `Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  ],
  rating: `8,9`,
  votes: 240,
  director: `Wes Andreson`,
  actors: [
    `Bill Murray`,
    `Edward Norton`,
    `Jude Law`,
    `Willem Dafoe`,
    `Saoirse Ronan`,
    `Willem Dafoe`,
    `Tony Revoloru`,
    `Tilda Swinton`,
    `Tom Wilkinson`,
    `Owen Wilkinson`,
    `Adrien Brody`,
    `Ralph Fiennes`,
    `Jeff Goldblum`,
  ],
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runtime: `1h 59m`,
  genre: `comedy`,
  releasedYear: `2014`,
  reviews: [
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
  ],
};

const MockComponent = () => <div />;

it(`Render MovieCard`, () => {
  const tree = renderer
  .create(
      <MovieCard
        movieData = {mockMovie}
        onHover = {() => {}}
        onUnhover = {() => {}}
        onClick = {() => {}}
      >
        <MockComponent />
      </MovieCard>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
