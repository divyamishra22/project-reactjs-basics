// import React from 'react'
import React, { useState } from 'react';
import TaskList from './TaskList';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [title, settitle] = useState('Enter your title');
    const [description, setdescription ] = useState('Enter your description here');
    const addTask = (title, description) => {
        const myTodo ={
            key: Date.now,
            title:title,
            description: description,
          }
        setTasks([...tasks, myTodo]);
        console.log(tasks);
    };
    const onChangingtitle = () =>{
        console.log("title was changed");

    }
    const onChangingdesc =() =>{
        console.log("description was changed");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        settitle(e.target.value.title);
        setdescription(e.target.value.description);
        if (!title || !description) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTask(title, description);
        }
        settitle('');
        setdescription('');
    };

    return (
        <>
            <form onClick={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" value ={title}
                    onChange={onChangingtitle}  /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" value ={description}
                       onChange={onChangingdesc} />  
                </div>
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </>
    );
};

export default TodoList;
