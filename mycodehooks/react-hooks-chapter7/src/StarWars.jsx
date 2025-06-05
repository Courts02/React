// Import necessary React hooks and the Axios library for API calls
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Import the StarWars CSS file for styling
import './Starwars.css'; 

// Function to fetch Star Wars character data from the API based on the search term
function fetchData(searchTerm) {
    return axios.get(`https://swapi.py4e.com/api/people/?search=${searchTerm}`)
        .then((res) => res.data.results) // Return only the results array
        .catch((err) => {
            console.error("Error fetching data:", err); // Log any errors
            return []; // Return an empty array if the request fails
        });
}

// Component to display the list of characters matching the search term
const Characters = ({ searchTerm }) => {
    const [data, setData] = useState([]);       // State to store fetched character data
    const [loading, setLoading] = useState(false); // State to show loading indicator

    useEffect(() => {
        // If no search term is provided, don't fetch
        if (!searchTerm) return;

        setLoading(true); // Show loading while fetching
        fetchData(searchTerm).then((results) => {
            setData(results);   // Store the fetched characters
            setLoading(false);  // Stop showing loading
        });
    }, [searchTerm]); // Run this effect whenever the search term changes

    return (
        <div>
            <h3>StarWars Search Results</h3>
            {loading ? <p>Loading...</p> : 
                // Map through the character data and display name, height, and gender
                data.map((item) => (
                    <div key={item.name} className="character">
                        <strong>{item.name}</strong><br />
                        Height: {item.height}cm<br />
                        Gender: {item.gender}
                    </div>
                ))
            }
        </div>
    );
};

// Main StarWars component that includes the search form and passes the term to Characters
function StarWars() {
    const [searchTerm, setSearchTerm] = useState(""); // State to store the current search term

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        setSearchTerm(e.target.search.value); // Update the search term with the input value
    };

    return (
        <div>
            {/* Form for user to input a character name */}
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" placeholder="Search for a character..." />
                <button type="submit">Search</button>
            </form>

            {/* Display the character results */}
            <Characters searchTerm={searchTerm} />
        </div>
    );
}

// Export the component so it can be used in other parts of the app
export default StarWars;
