import React from "react";
interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return <div className="rating">{rating}</div>;
};

export default Rating;
