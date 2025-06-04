import React, { useState } from 'react'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'  // Import filled and outline star icons

function Rating(props) {
    // Initialize rating state with the rating passed via props
    const [rating, setRating] = useState(props.rating)

    return (
        <div style={styles.starStyle}>
            {/* Render star 1: if current rating is >= 1 show filled star, else outline */}
            {rating >= 1 ? ( 
                <IoIosStar onClick={() => setRating(1)} />     
            ) : (         
                <IoIosStarOutline onClick={() => setRating(1)} />     
            )}     

            {/* Render star 2 */}
            {rating >= 2 ? ( 
                <IoIosStar onClick={() => setRating(2)} />     
            ) : (         
                <IoIosStarOutline onClick={() => setRating(2)} />     
            )} 

            {/* Render star 3 */}
            {rating >= 3 ? ( 
                <IoIosStar onClick={() => setRating(3)} />     
            ) : (         
                <IoIosStarOutline onClick={() => setRating(3)} />     
            )} 

            {/* Render star 4 */}
            {rating >= 4 ? ( 
                <IoIosStar onClick={() => setRating(4)} />     
            ) : (         
                <IoIosStarOutline onClick={() => setRating(4)} />     
            )} 

            {/* Render star 5 */}
            {rating >= 5 ? ( 
                <IoIosStar onClick={() => setRating(5)} />     
            ) : (         
                <IoIosStarOutline onClick={() => setRating(5)} />     
            )}   

            {/* Display the number of reviews passed as prop */}
            <span>{props.numOfReviews}</span>
        </div>
    )
}

export default Rating

// Inline styles for the stars container
const styles = {
    starStyle: {
      color: 'orange'    // Color stars orange
    }
}
