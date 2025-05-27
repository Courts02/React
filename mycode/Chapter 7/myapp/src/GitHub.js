// Importing necessary libraries and components
import React, { Component } from 'react';
import axios from 'axios'; // For making HTTP requests
import ReactLoading from 'react-loading'; // For showing a loading spinner
import { Media, Form, FormGroup, FormControl, Button } from 'react-bootstrap'; // Bootstrap components for layout and forms

// Creating a class-based React component
class GitHub extends Component {
    constructor() {
        super();
        // Initial state
        this.state = {
            data: [],         // Stores GitHub user data
            searchTerm: '',   // Stores user's search input
            isLoading: false  // Tracks if data is currently being fetched
        };

        // Bind 'this' to the event handlers
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Optional lifecycle method: called after component mounts
    // You can use this to fetch initial data if needed
    // componentDidMount() {
    //     this.getGitHubData('J4d4'); // Example query
    // }

    // Updates searchTerm in state when the input changes
    handleChange(e) {
        this.setState({ searchTerm: e.target.value });
    }

    // Handles form submission
    handleSubmit(e) {
        e.preventDefault(); // Prevents page refresh
        this.setState({
            isLoading: true // Show loading spinner while fetching
        });
        this.getGitHubData(this.state.searchTerm); // Fetch GitHub users
    }

    // Fetches GitHub users based on search term
    getGitHubData(_searchTerm) {
        axios.get("https://api.github.com/search/users?q=" + _searchTerm)
            .then(res => {
                this.setState({
                    isLoading: false,      // Stop loading spinner
                    data: res.data.items   // Store fetched user data
                });
                console.log(res.data.items); // Log results for debugging
            });
    }

    render() {
        // Map over fetched data to create Media elements for each user
        const listUsers = this.state.data.map((user) =>
            <Media key={user.id}>
                <a href={user.html_url}>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={user.avatar_url}
                        alt="Generic placeholder"
                    />
                </a>
                <Media.Body>
                    <h5>Login: {user.login}</h5>
                    <p>Id: {user.id}</p>
                </Media.Body>
            </Media>
        );

        return (
            <div>
                {/* Search form */}
                <Form inline onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formInlineName">
                        <Form.Control
                            type="text"
                            value={this.state.searchTerm}
                            placeholder="Enter Search Term"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    {' '}
                    <Button type="submit">
                        Search
                    </Button>
                </Form>

                <h3>GitHub User Results</h3>

                {/* Loading spinner while fetching data */}
                {this.state.isLoading &&
                    <ReactLoading type="spinningBubbles" color="#444" />
                }

                {/* Render user list */}
                {listUsers}
            </div>
        );
    }
}

export default GitHub; // Export the component for use in other files
