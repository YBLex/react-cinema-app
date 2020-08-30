import React from 'react';
import PropTypes from 'prop-types';

const MovieCatalog = ({children}) => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      {children}
    </section>
  );
};

MovieCatalog.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default MovieCatalog;
