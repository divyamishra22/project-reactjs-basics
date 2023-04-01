//import logo from './logo.svg';
import './App.css';
//import React, { useState } from 'react';
import TodoList from './My Components/TodoList';
import Header from './My Components/Header';
import About from './My Components/About';


function App() {
 
  return (
       <>
       <Header/>
      <TodoList />
      <About/>
      </>      
   
  )
}

export default App;
