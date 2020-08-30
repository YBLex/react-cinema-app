import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Main from '../main/main.jsx';
import SingIn from "../sing-in/sing-in.jsx";
// import MoviePage from '../movie-page/movie-page.jsx';

const App = ({
  promoTitle,
  promoGenre,
  promoYear,
}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main
            promoTitle={promoTitle}
            promoGenre={promoGenre}
            promoYear={promoYear}
          />
        </Route>
        <Route exact path='/sing-in'>
          <SingIn />
        </Route>
        {/*<Route exact path='/movie'>*/}
        {/*  <MoviePage*/}
        {/*    movieData={movies}*/}
        {/*  />*/}
        {/*</Route>*/}
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoYear: PropTypes.number.isRequired,
};

export default App;
