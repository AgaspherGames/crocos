import React from 'react';
interface ReviewsCountProps {
    reviews: number
}

const ReviewsCount: React.FC<ReviewsCountProps> = ({reviews}) => {
    const lastDigit = reviews%10
    let review = 'отзыв'
    if (lastDigit==1) review='отзыв'
    else if (lastDigit>1 && lastDigit<5) review='отзыва'
    else review='отзывов'
    
  return ( <p className="reviews-count">{reviews} {review}</p> );
}

export default ReviewsCount;