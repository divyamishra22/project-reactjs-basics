//import logo from './logo.svg';
import './App.css';
//import React, { useState } from 'react';
import TodoList from './My Components/TodoList';
import Header from './My Components/Header';
import About from './My Components/About';
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
 
  return (
      
        <Router>
       <Header title={"My Tasks List"}/>
       <Routes>
      {/* <Route exact path ='/'> */}
      <Route path='/' element={<TodoList/>} />
      {/* <TodoList /> */}
      {/* </Route> */}
      {/* <Route exact path ='/About'> */}
      {/* <About/> */}
      <Route path='/' element={<About/>} />
      {/* </Route> */}
      </Routes>
      </Router>    
   
  )
}

export default App;
