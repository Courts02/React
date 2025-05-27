import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GitHub from './GitHub';
import GitHubUser from './GitHubUser';
import Dessert from './Dessert';
import { Nav, Navbar } from 'react-bootstrap';
import Contact from './Contact';


function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/github">GitHub</Nav.Link>
          <Nav.Link as={Link} to="/dessert">Table</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function NotFound() {
  return <div>Not Found</div>;
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/github" element={<GitHub />} />
        <Route path="/github/user/:login/:id" element={<GitHubUser />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
