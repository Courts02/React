import { useState, useActionState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'

function UserForm() {
    // Local state for controlled inputs
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Function to handle form submission and validate form data
    // It receives 'state' (for form errors) and 'formData' (submitted form values)
    const handleSubmit = (state, formData) => {
        // Extract form values from formData
        const email = formData.get("email")
        const password = formData.get("password")

        // Validate email and set error messages in state if invalid
        let emailValid = false;
        if (!email || email.length == 0) {
            state.emailError = "Email is required"
        }
        else if (email.length < 6) {
            state.emailError = "Email should be minimum 6 characters"
        }
        else if (email.indexOf(' ') >= 0) {
            state.emailError = "Email cannot contain spaces"
        }
        else {
            // Clear error message and mark email as valid
            state.emailError = ""
            emailValid = true
        }

        // If email validation passes, show alert and reset inputs
        if (emailValid) {
            alert(`Email: ${email}\nPassword: ${password}`)
            setEmail("")
            setPassword("")
        }

        // Return updated state (with error messages)
        return state
    }

    // Use custom hook to manage form action and form-level state (such as validation errors)
    // Initial state has empty emailError
    const [state, formAction] = useActionState(handleSubmit, {
        emailError: ""
    })

    return (
        <div>
            {/* Form with action bound to formAction handler */}
            <Form action={formAction}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                {/* Show alert only if there's an email validation error */}
                {state && state.emailError.length > 0 &&
                    <Alert variant="danger">{state.emailError}</Alert>}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            {/* Debugging info showing current input values */}
            Email entered: {email}
            <br />
            Password entered: {password}
        </div>
    )
}

export default UserForm
