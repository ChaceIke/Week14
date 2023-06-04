import React from 'react';
// I begin my Review component by importing react
// Next I pass in the prop that was given by the ReviewList component. It should be an individual review from the array of reviews contained in the Movie component.
const Review = ({ review }) => {
  // I then return the html of what each review should look like. I point to different data within the review object including the reviwer's name and their review.
  return (
    <div className="review">
      <h5>{review.reviewerName}</h5>
      <p>Review: {review.comment}</p>
    </div>
  );
};
// Finally, I export my Review component for use in the ReviewList component.
export default Review;
