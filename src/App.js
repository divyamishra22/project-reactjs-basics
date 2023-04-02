//import logo from './logo.svg';
import './App.css';
//import React, { useState } from 'react';
import TodoList from './My Components/TodoList';
import Header from './My Components/Header';
import About from './My Components/About';

import {
  BrowserRouter ,
  Route,
  Routes,
} from "react-router-dom";


function App() {
 
  return (
      
        <BrowserRouter>
       <Header title={"My Tasks List"}/>
       <Routes>
      {/* <Route exact path ='/'> */}
      <Route exact path='/' element={<TodoList/>} />
      {/* <TodoList /> */}
      {/* </Route> */}
      {/* <Route exact path ='/About'> */}
      {/* <About/> */}
      <Route  exact path='/about' element={<About/>} />
      {/* </Route> */}
      </Routes>
      </BrowserRouter>    
   
  )
}

export default App;
