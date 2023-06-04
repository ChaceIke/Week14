import React, {useState} from 'react';
import StarSystem from './stars';
import ReviewList from './review-list';
import ReviewForm from './review-form';
// I begin my Movie component by importing the useState hook from react. Next I import my starSystem, ReviewList, and ReviewForm components from my components folder.
// Each functional Movie component will recieve a movie object prop handed down from the MovieList component.
const Movie = ({ movie }) => {
  // I use the useState hook to establish an array for the reviews state, and a function to change the state.
  const [reviews, setReviews] = useState([]);
 // Next I initialize a function to take a review when the submit button is pressed (more on this in my ReviewForm component) and add the passed in review to my reviews state
 // (which is an array). It then updates the state with the new array.
  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };
 // Below, I return my Movie functional component into what I'd like to be rendered out.
 // Usin the movie object that was passed down through my MovieList component, I point to different data on that object according to whatever is needed within my application.
 // I first use a prop to identify the movie poster path for the image I'd like to display (I also include information for the alt).
 // Next I use a prop for the title and the movie summary.
 // Then I include my Stars component for rating the movie, my ReviewList component for listing off all previous reviews, and finally a ReviewForm component (which I use to pass
 // down my handleReviewSubmit function to).
  return (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.overview}</p>
              {<StarSystem totalStars={5}/>}
              <ReviewList reviews={reviews} />
              <ReviewForm onSubmit={handleReviewSubmit} />
            </div>
          </div>
  );
};
// Finally, I export my functional Movie component for the MovieList component to use.
export default Movie;
