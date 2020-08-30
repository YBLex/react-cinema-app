import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MovieCard from './movie-card.jsx';

const movie = {
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
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div />;

it(`Should be clicked`, () => {
  const clickOnMovieCard = jest.fn();

  const component = shallow(
      <MovieCard
        movieData = {movie}
        onHover = {() => {}}
        onUnhover = {() => {}}
        onClick = {clickOnMovieCard}
      >
        <MockComponent />
      </MovieCard>
  );

  const movieCard = component.find(`.small-movie-card`);

  movieCard.props().onClick();
  expect(clickOnMovieCard.mock.calls.length).toBe(1);
});
