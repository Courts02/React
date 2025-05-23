import React, { useEffect, useState, useOptimistic } from "react"
import { likeTweet, getLikes } from "./tweetServer"

// https://reactsvgicons.com/bootstrap?q=heart

const fetchLikes = async (tweetId) => {
    const likes = await getLikes(tweetId)
    return likes
}

function Tweet({ tweetId }) {
    const [likes, setLikes] = useState(0)
    const [optimisticLikes, addOptimisticLikes] = useOptimistic(likes, (state, l) => state + l)

    useEffect(() => {
        fetchLikes(tweetId).then(setLikes)
    }, [likes])
    
    const incrementLike = () => {
        setLikes(likes + 1)
        likeTweet(tweetId)
    }

    return (
        <div>
            <span style={{cursor:"pointer"}} onClick={incrementLike}>
                <svg
                    fill={likes > 0 ? "#ff0000" : "#000000"}
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                >
                    <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
            </span>
            <span style={{padding:5}}>{optimisticLikes}</span>
        </div>
    )
}

export default Tweet