import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
// First I import React and a hook from React. Then I import a font library for the stars that I'll use.
// Next I pass in a prop given from the Movie component which tells this component how many stars to create.
const StarSystem = ({ totalStars }) => {
    // Next I use the useState hook to set the initial rating and hover states to 0 and give them each a function for changing the state.
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    // Next I use the spread operator and the Array constructor to create an array out of the prop given by the Movie component (in which the value will always be 5).
    // I then map through this created array and give each star an index (and add a 1 to that index so it's 1 through 5 for the user).
    // The starValue variable is given to the key, the value, and the onClick. Since it's a radio label element, we need to tell it how many options there should be.
    // We also need to hide the selection options so the user can press on the stars themselves.
    // If the starValue is less than or equal to the hover or rating states (which both start at zero), then the stars light up (change the font color to 'warning' which is gold).
    // If it isn't, they stay black outlines of stars.
    // Upon the mouse hovering over the <i> element the setHover function is called according to whichever star the user is on. When the user hovers off the star, the setHover function
    // sets the hover according to the rating state.
    return (
        <div>
            {[...Array(totalStars)].map((star, i) => {
                const starValue = i + 1;
                return (
                    <label key={starValue}>
                        <input
                            type="radio"
                            name="rating"
                            value={starValue}
                            onClick={() => setRating(starValue)}
                            style={{ display: 'none' }}
                        />
                        <i
                            className={
                                starValue <= (hover || rating)? 'fas fa-star text-warning':'far fa-star'
                            }
                            onMouseEnter={() => setHover(starValue)}
                            onMouseLeave={() => setHover(rating)}
                        ></i>
                    </label>
                );
            })}
        </div>
    );
};
// Finally, I export my StarSystem component for use in my Movie component.
export default StarSystem;