import {reducer, ActionCreator, ActionType} from './reducer.js';
import {getArrayOfUniqueProps} from '../utils/utils.js';

const moviesMock = [
  {
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
  },
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    img: `img/bohemian-rhapsody.jpg`,
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
    runtime: `1h 39m`,
    genre: `crime`,
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
  },
  {
    id: 2,
    title: `Macbeth`,
    img: `img/macbeth.jpg`,
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
    runtime: `1h 39m`,
    genre: `documentary`,
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
  },
  {
    id: 3,
    title: `Aviator`,
    img: `img/aviator.jpg`,
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
    runtime: `1h 39m`,
    genre: `drama`,
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
  },
  {
    id: 4,
    title: `We need to talk about Kevin`,
    img: `img/we-need-to-talk-about-kevin.jpg`,
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
    runtime: `1h 39m`,
    genre: `horror`,
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
  },
  {
    id: 5,
    title: `What We Do in the Shadows`,
    img: `img/what-we-do-in-the-shadows.jpg`,
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
    runtime: `1h 39m`,
    genre: `family`,
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
  },
];

const filterByGenre = (movies, genre) => {
  return movies.filter((movie) => movie.genre === genre);
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    currentGenre: ``,
    genres: getArrayOfUniqueProps(moviesMock, `genre`),
    movies: moviesMock,
    sortedByGenreMovies: moviesMock,
  });
});

it(`Reducer should change genre by a given value`, () => {
  expect(reducer({
    currentGenre: ``,
    genres: getArrayOfUniqueProps(moviesMock, `genre`),
    movies: moviesMock,
    sortedByGenreMovies: moviesMock,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `comedy`
  })).toEqual({
    currentGenre: `comedy`,
    genres: getArrayOfUniqueProps(moviesMock, `genre`),
    movies: moviesMock,
    sortedByGenreMovies: moviesMock,
  });
});

it(`Reducer should get movies by genre`, () => {
  expect(reducer({
    currentGenre: ``,
    genres: getArrayOfUniqueProps(moviesMock, `genre`),
    movies: moviesMock,
    sortedByGenreMovies: moviesMock,
  }, {
    type: ActionType.GET_MOVIES_BY_GENRE,
    payload: filterByGenre(moviesMock, `comedy`),
  })).toEqual({
    currentGenre: ``,
    genres: getArrayOfUniqueProps(moviesMock, `genre`),
    movies: moviesMock,
    sortedByGenreMovies: filterByGenre(moviesMock, `comedy`),
  });
});

describe(`ActionCreators should work correctly`, () => {
  it(`changeGenre should return empty genre without arguments`, () => {
    expect(ActionCreator.changeGenre()).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: ``,
    });
  });

  it(`changeGenre should return comedy genre`, () => {
    expect(ActionCreator.changeGenre(`comedy`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `comedy`,
    });
  });

  it(`getMoviesByGenre should return initial movies state withour arguments`, () => {
    expect(ActionCreator.getMoviesByGenre()).toEqual({
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: moviesMock,
    });
  });

  it(`getMoviesByGenre should return initial movies state withour arguments`, () => {
    expect(ActionCreator.getMoviesByGenre(`comedy`)).toEqual({
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: filterByGenre(moviesMock, `comedy`),
    });
  });
});
