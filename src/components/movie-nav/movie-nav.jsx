import React from 'react';
import PropTypes from 'prop-types';

const MovieNav = ({children}) => {
  return (
    <nav className="movie-nav movie-card__nav">
      {children}
    </nav>
  );
};

MovieNav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default MovieNav;
