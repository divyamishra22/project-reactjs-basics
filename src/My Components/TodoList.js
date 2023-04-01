// import React from 'react'
import React, { useState } from 'react';
import TaskList from './TaskList';
const TodoList = () => {
    const [tasks, settasks] = useState([]);
    const [title, settitle] = useState('');
    const [description, setdescription ] = useState('');
    
    const addTask =(title,description) =>{
        let key;
        console.log("adding a todo");
        const myTodo ={
         key: Date.now(),
         title: title,
        description: description,
        }
        settasks([...tasks,myTodo]);
        // settasks([myTodo,...tasks]);
        console.log(tasks);
      }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTask(title,description);
        }
        // settitle('');
        // setdescription('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" value ={title}
                    onChange={(e) =>{
                        settitle(e.target.value);
                    }}  /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" value ={description}
                       onChange={(e) =>{
                        setdescription(e.target.value);
                       }} />  
                </div>
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
            <div>
                 {/* <TaskList todos={tasks} />   */}
                 
            </div>
        </>
    );
};

export default TodoList;
