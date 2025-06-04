import React, { useState } from 'react'                    // Import React and useState hook
import { IoIosStar, IoIosStarOutline } from 'react-icons/io' // Import filled and outlined star icons

function Rating(props) {
    // Initialize rating state with the value passed from props
    const [rating, setRating] = useState(props.rating)

    return (
        // Container div styled with orange color for the stars
        <div style={styles.starStyle}>
            {/* For each star (1 to 5), conditionally render a filled star if rating >= that number,
                otherwise render an outlined star. Clicking the star sets the rating to that number. */}
            {rating >= 1 ? (
                <IoIosStar onClick={() => setRating(1)} />
            ) : (
                <IoIosStarOutline onClick={() => setRating(1)} />
            )}
            {rating >= 2 ? (
                <IoIosStar onClick={() => setRating(2)} />
            ) : (
                <IoIosStarOutline onClick={() => setRating(2)} />
            )}
            {rating >= 3 ? (
                <IoIosStar onClick={() => setRating(3)} />
            ) : (
                <IoIosStarOutline onClick={() => setRating(3)} />
            )}
            {rating >= 4 ? (
                <IoIosStar onClick={() => setRating(4)} />
            ) : (
                <IoIosStarOutline onClick={() => setRating(4)} />
            )}
            {rating >= 5 ? (
                <IoIosStar onClick={() => setRating(5)} />
            ) : (
                <IoIosStarOutline onClick={() => setRating(5)} />
            )}

            {/* Display the number of reviews next to the stars */}
            <span>{props.numOfReviews}</span>
        </div>
    )
}

export default Rating  // Export the component for use in other files

// Styles object to keep inline styles organized
const styles = {
    starStyle: {
        color: 'orange'  // Set star color to orange
    }
}
