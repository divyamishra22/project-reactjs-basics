// import React from 'react'
import React, { useState } from 'react';
import TaskList from './TaskList';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [title, settitle] = useState('');
    const [description, setdescription ] = useState('');
    const addTask = (title, description) => {
        const myTodo ={
            key: Date.now,
            title:title,
            description: description,
          }
        setTasks([...tasks, myTodo]);
        console.log(tasks);
    };
    // const onChanging = (e) =>{
    //     settitle(e.target.value);
    //     setdescription(e.target.value);
    //     console.log("title was changed");
    //     console.log("description was changed");
    // }


    const handleSubmit = (e) => {
        e.preventDefault();
        // if (!title || !description) {
        //     alert("Title or Description cannot be blank");
        // }
        // else {
        //     addTask(title, description);
        // }
        addTask(title, description);
        // settitle('');
        // setdescription('');
    };

    return (
        <>
            <form onClick={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" value ={title}
                    onChange={(e) =>{
                        const changedtitle = e.target.value;
                        settitle(changedtitle);
                    }}  /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" value ={description}
                       onChange={(e) =>{
                        const changeddescription  = e.target.value;
                        setdescription(changeddescription);
                       }} />  
                </div>
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </>
    );
};

export default TodoList;
