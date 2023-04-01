import Task from   '../My Components/Task';      ;
// import React from 'react';

    const TaskList = (tasks) => {
    return (
        <div>
      { tasks.length === 0? "NO TODOS TO DISPLAY": tasks.map((task) =>{
        return  <Task task={task} key={task.sno} />
    }) 
       } 
       </div>                                           
    );
};

export default Task;