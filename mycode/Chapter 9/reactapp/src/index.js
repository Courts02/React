import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//firebase dependancies
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx5pPs2lB3NTiK3vG5KmZRYKMhdwhrCJE",
  authDomain: "bootcampareact-8c418.firebaseapp.com",
  projectId: "bootcampareact-8c418",
  storageBucket: "bootcampareact-8c418.firebasestorage.app",
  messagingSenderId: "330805567115",
  appId: "1:330805567115:web:5db97987a84821a191fe8e",
  measurementId: "G-0F1P5QN64S"
};

firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


