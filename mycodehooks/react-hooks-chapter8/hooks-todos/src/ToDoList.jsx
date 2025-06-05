import React, { use, useState } from 'react' 
import { Table, Form, Button } from 'react-bootstrap' // Bootstrap components for styling
import { TodosContext } from './App' // Importing context from App

function ToDoList() {
  const { state, dispatch } = use(TodosContext)
  const [todoText, setTodoText] = useState("") // State to hold the text input
  const [editMode, setEditMode] = useState(false) // Toggle to determine if user is editing
  const [editTodo, setEditTodo] = useState(null) // Stores the todo currently being edited
  const buttonTitle = editMode ? "Edit" : "Add" // Changes button label based on mode

  // Handles adding and editing todos
  const handleSubmit = async (formData) => {
    if(editMode){            
      // Dispatch an edit action with updated text
      dispatch({type: 'edit', payload:{...editTodo,text:todoText}})
      setEditMode(false) // Exit edit mode
      setEditTodo(null)  // Clear current todo being edited
    }
    else{
        // Dispatch a new todo to add
        dispatch({type: 'add', payload: todoText})
    }  

    setTodoText("") // Clear input after submit
  }

  return (
    <div style={{ padding: 5 }}>
      {/* Form to submit new or edited todo */}
      <Form action={handleSubmit}>
        <Form.Group controlId="todoForm">
          <Form.Control
            type="text"
            placeholder="Enter To Do"
            onChange={event => setTodoText(event.target.value)} // Update todo text on input change
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {buttonTitle} {/* Shows "Add" or "Edit" based on mode */}
        </Button>
      </Form>

      {/* Table displaying todos */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>To Do</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {state.todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.text}</td>
              <td onClick={() => {
                // Enter edit mode and populate input with selected todo
                setTodoText(todo.text)
                setEditMode(true)
                setEditTodo(todo)
              }}>
                Edit
              </td>
              <td onClick={() =>
                // Dispatch delete action for selected todo
                dispatch({ type: 'delete', payload: todo })}>
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ToDoList
