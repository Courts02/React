import React, { useState } from 'react'                     // Importing React and the useState hook
import { IoIosStar, IoIosStarOutline } from 'react-icons/io' // Importing star icons from react-icons

function Rating(props) {
    // Setting up state for the rating, initialized with the prop passed in
    const [rating, setRating] = useState(props.rating)

    return (
        <div>
            <h1>Rating: {rating}</h1>  {/* Displaying the current rating */}
            
            {/* Rendering 5 stars with conditional logic:
                - If the rating is >= the current star number, show a filled star
                - Otherwise, show an outlined star
                - Clicking a star sets the rating to that number */}
            
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
        </div>
    )
}

export default Rating  // Exporting the Rating component so it can be used in other files
