import React, { useState } from 'react'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'

function Rating(props) {
    // Initialize rating state with the rating passed in props
    const [rating, setRating] = useState(props.rating)

    return (
        <div style={styles.starStyle}>
            {/* For each star position from 1 to 5, show filled or outline star based on rating */}
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

            {/* Show the number of reviews next to stars */}
            <span>{props.numOfReviews}</span>
        </div>
    )
}

export default Rating

const styles = {
    starStyle: {
        color: 'orange' // Set star icon color to orange
    }
}
