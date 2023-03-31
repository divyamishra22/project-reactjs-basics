// import React from 'react'
import React, { useState } from 'react';
const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const addTask = (title, description) => {
        const newTask = { id: Date.now(), title, description };
        setTasks([...tasks, newTask]);
        console.log(tasks);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        if (title.trim() === '' || description.trim() === '') {
            alert('Please fill in all fields');
            return;
        }
         else {
            addTask(title, description);
        }
        e.target.title.value = '';
        e.target.description.value = '';
    };

    return (
        <div className='container flex-col'>
            <h1 className='head'>Todo List</h1>
            <form className='form flex-col'   onSubmit={handleSubmit}>
                <div className='title flex-col'>
                    <label>Title:</label>
                    <input type="text" name="title" defaultValue={" "} />
                </div>
                <div className='desc flex-col'>
                    <label>Description:</label>
                    <input type="text" name="description"  defaultValue={" "} />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add </button>
            </form>
        </div>    
    );
};

export default TodoList;
