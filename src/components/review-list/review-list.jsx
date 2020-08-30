import React from 'react';
import PropTypes from 'prop-types';

import Review from '../review/review.jsx';

const splitIntoTwoColums = (arr) => {
  const pivot = arr.length % 2 === 0
    ? arr.length / 2
    : Math.ceil(arr.length / 2);

  return {
    firstColumn: arr.slice(0, pivot),
    secondColumn: arr.slice(pivot),
  };
};

const ReviewsList = ({reviews}) => {
  const splitedReviews = splitIntoTwoColums(reviews);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {
          splitedReviews.firstColumn.map((reviewData, index) =>
            <Review key={`review_${index}`} review={reviewData}/>)
        }
      </div>
      <div className="movie-card__reviews-col">
        {
          splitedReviews.secondColumn.map((reviewData, index) =>
            <Review key={`review_${index}`} review={reviewData}/>)
        }
      </div>
    </div>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};


export default ReviewsList;
