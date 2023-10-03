import React, { useState } from 'react';

const StarRating = ({ totalStars, initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating || 0);

  const handleStarClick = (newRating) => {
    setRating(newRating);
    onRatingChange(newRating);
  };

  const handleStarHover = (hoveredRating) => {
    setRating(hoveredRating);
  };

  const handleStarLeave = () => {
    if (initialRating !== undefined) {
      setRating(initialRating);
    } else {
      setRating(0);
    }
  };

  const getStarClassName = (starValue) => {
    if (starValue <= rating) {
      return 'star-icon filled';
    }
    return 'star-icon';
  };

  return (
    <div className="star-rating" onMouseLeave={handleStarLeave}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={getStarClassName(starValue)}
            onClick={() => handleStarClick(starValue)}
            onMouseEnter={() => handleStarHover(starValue)}
          >
          <i className="fa fa-star" aria-hidden="true"></i>
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
