import React, { useState } from 'react';
// I begin my ReviewForm component my importing the useState hook from React.
// Next I pass in my onSubmit prop which contains the handleReviewSubmit function.
const ReviewForm = ({ onSubmit }) => {
  // Here I set up my states which are for both the reviewer name and the review they wish to submit.
  const [reviewerName, setReviewerName] = useState('');
  const [comment, setComment] = useState('');
 // Next I initialize a function to run when the form the user returns below is submitted.
 // I pass in the event.
  const handleSubmit = (event) => {
    // I prevent the page from automatically reloading as I'd like to handle that myself.
    event.preventDefault();
    // I call the function passed down from the Movie component and pass in the props I recieved from the user's entries.
    onSubmit({ reviewerName, comment });
    // I set the reviewerName state back to blank.
    setReviewerName('');
    // I set the comment state back to blank.
    setComment('');
  };
  // Below, I return my Movie functional component into what I'd like to be rendered out.
  // The form calls the function above upon the user pressing the submit button.
  // Each input element has a value prop to represent the current state and an onChange listener to change the state according to the passed in information.
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: <br></br>
        <input type="text" value={reviewerName} onChange={(e) => setReviewerName(e.target.value)} required />
      </label>
      <label>
        Comment: <br></br>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
      </label>
      <button type="submit">Submit Review</button>
    </form>
  );
};
// Finally, I export my ReviewForm component for use in each Movie component.
export default ReviewForm;