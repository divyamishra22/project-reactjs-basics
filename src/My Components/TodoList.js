// import React from 'react'
import React, {useState } from 'react';
import TaskList from './TaskList';
import './styles/style.css'

const TodoList = () => {
    const [tasks, settasks] = useState([]);
    const [title, settitle] = useState('');
    const [description, setdescription ] = useState('');
   
  
    const addTask =(title,description) => {
        //let key;
        console.log("adding a todo");
        const myTodo ={
         key: Date.now(),
         title: title,
        description: description,
        }
        settasks([...tasks, myTodo]);
        console.log(tasks);
        console.log(tasks.length);
      }  
    
      const onDelete =(task) =>{
        console.log("on delete of task", task);
        settasks(tasks.filter((e)=> {
          return e!== task;
        }));
        console.log("deleted", task)
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTask(title,description);
        }
        settitle('');
        setdescription('');
    };

    return (
        <>
             <div className='container flex-col'>
            <h1 className='head'>Todo List</h1>
            <form className='form flex-col' onSubmit={handleSubmit}>
            <div className='title flex-col'>
                    <label htmlFor="exampleInputEmail1" className="form-label text-center">Title</label>
                    <input type="text" className="form-control text-center" id="exampleInputEmail1" value ={title}
                    onChange={(e) =>{
                        settitle(e.target.value);
                    }}  /> 
                </div>
                <div className='desc flex-col'>
                    <label htmlFor="exampleInputPassword1" className="form-label text-center">Description</label>
                    <input type="text" className="form-control text-center" id="exampleInputPassword1" value ={description}
                       onChange={(e) =>{
                        setdescription(e.target.value);
                       }} />  
                </div>
                
                <div className='flex flex-col items-center justify-center'>
                <button type="submit " className="btn btn-sm btn-success ">Add Todo</button>
                </div>
            </form>
            <div>
                     <TaskList tasks={tasks}   onDelete={onDelete} /> 
                
                 
            </div>
            </div>
        </>
    );
};

export default TodoList;
