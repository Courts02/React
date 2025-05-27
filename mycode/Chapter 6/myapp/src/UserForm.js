import React, { Component } from 'react';
// Importing Formik components for form handling
import { Formik, Form, Field, ErrorMessage } from 'formik';

// Defining the UserForm component
class UserForm extends Component {
    constructor(props) {
        super(props); // Calling the parent class constructor with props
    }

    render() {
        return (
            <div>
                <h1>Any place in your app!</h1>
                <Formik
                    // Setting initial values for the form fields
                    initialValues={{ email: '', password: '' }}

                    // Custom validation function
                    validate={values => {
                        const errors = {}; // Object to store validation errors

                        // Email validation
                        if (!values.email) {
                            errors.email = 'Required'; // Email field is empty
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address'; // Email doesn't match regex pattern
                        } else if (values.email.length < 10) {
                            errors.email = 'Email address too short'; // Email is less than 10 characters
                        }

                        // Password validation
                        if (!values.password) {
                            errors.password = 'Required'; // Password field is empty
                        } else if (values.password.length < 8) {
                            errors.password = 'Password too short'; // Password is less than 8 characters
                        }

                        return errors; // Return all validation errors
                    }}

                    // Called when the form is submitted
                    onSubmit={(values, { setSubmitting }) => {
                        // Simulate a delay (e.g., API call)
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2)); // Show form values in an alert
                            setSubmitting(false); // Set submitting state back to false
                        }, 400); // 400ms delay
                    }}
                >
                    {/* Render props pattern to access Formik state and helpers */}
                    {({ isSubmitting }) => (
                        <Form>
                            {/* Email input field */}
                            <Field type="email" name="email" />
                            {/* Email error message */}
                            <span style={{ color:"red", fontWeight: "bold" }}>
                                <ErrorMessage name="email" component="div" />
                            </span>

                            {/* Password input field */}
                            <Field type="password" name="password" />
                            {/* Password error message */}
                            <span style={{ color:"red", fontWeight: "bold" }}>
                                <ErrorMessage name="password" component="div" />
                            </span>

                            {/* Submit button, disabled while submitting */}
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}

// Exporting the component so it can be used elsewhere
export default UserForm;
