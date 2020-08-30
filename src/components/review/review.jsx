import React from 'react';
import PropTypes from 'prop-types';

const extractFormattedDate = (dateStr) => {
  const options = {
    timeZone: `Europe/Moscow`
  };
  const formater = new Intl.DateTimeFormat(`ISO`, options);
  const date = new Date(dateStr);
  return formater.format(date);
};

const Review = ({review}) => {
  const {
    author,
    date,
    rating,
    text,
  } = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={extractFormattedDate(date)}>{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })
};

export default Review;
