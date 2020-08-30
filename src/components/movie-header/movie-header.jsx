import React from 'react';
import PropTypes from 'prop-types';

import UserProfile from '../user-porfile/user-profile.jsx';

const MovieHeader = ({
  withUserInfo,
  withMovieCardBg,
  headerClass,
  title,
  authStatus,
}) => {
  return (
    <>
      {
        withMovieCardBg &&
        <div className="movie-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
      }

      <header className={`page-header ${headerClass}`}>
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className={title.class}>{title.name}</h1>

        {
          withUserInfo &&
          <UserProfile
            authStatus={authStatus}
          />
        }
      </header>
    </>
  );
};

MovieHeader.propTypes = {
  withUserInfo: PropTypes.bool,
  withMovieCardBg: PropTypes.bool,
  headerClass: PropTypes.string.isRequired,
  title: PropTypes.shape({
    name: PropTypes.string.isRequired,
    class: PropTypes.string,
  }),
  authStatus: PropTypes.string.isRequired,
};

export default MovieHeader;
