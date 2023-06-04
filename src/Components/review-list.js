import React from 'react';
import Review from './review';
// I begin my ReviewList component by importing React and my Review commponent.
// reviews prop is passed down from the Movie component. The prop contains a state which is also an array holding all of the reviews for that given movie.
const ReviewList = ({ reviews }) => {
  // I map through the array and give each review an index. I pass the index and the review itself down to the Review component.
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};
// Finally I export my ReviewList functional component for use in the Movie component.
export default ReviewList;
