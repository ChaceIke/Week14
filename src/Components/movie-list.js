import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './movie';
// First I import all of needed components. React for my useState and useEffect hooks, Axios for requesting information from The Movie Database API, and movie.js for my movie component.
const MovieList = () => {
  // The first thing I do is set up my useState hook. The useState hook returns an array with two elements: the current state, and a function to change the current state.
  // I also include an empty array within the useState parantheses in order to store the movies within it.
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // I use axios (a popular HTTP client) to retrieve information from The Movie Database.
    axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=2b284a9610de7159c516310f674a7744')
      // After recieving the information needed, I pass that information into my setMovies function. This function updates the state (which I made an array) with the information.
      .then(response => {
        setMovies(response.data.results);
      })
      // If it were to fail, I would catch the error and log it to the console.
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
      // The empty array on the line below is the second parameter for the useEffect hook. This causes the hook to only run once it initially mounts and not on every render.
  }, []);

  // Below, I return the MovieList functional component into what I'd like my app to render. I map through the array of movie objects to create divs with bootstrap and css classes and
  // a Movie component for each item in the array. I use a key prop to indicate the id in the class and I use a prop to pass in the movie object itself to the individual component.
  return (
    <div className='container'>
    <div className='row'>
        {movies.map((movie) => (
          <div className="card text-white bg-dark border border-primary col-lg-3 col-md-4 col-sm-6 mb-4" key={movie.id}>
          <Movie movie={movie} />
        </div>
        ))}
    </div>
    </div>
  );
};

// Finally, I export my MovieList component.
export default MovieList;