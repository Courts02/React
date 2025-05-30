import React, { Component } from 'react';
import User from './User';
import UserForm from './UserForm';
//firebase dependancies
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/edit/:id" component={UserForm} />
              <Route exact path="/add" component={UserForm} />
              <Route exact path="/" component={User} />
              <Route path="/*" component={NotFound} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}

export default App;
