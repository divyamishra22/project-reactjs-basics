
import React from 'react';

    const Task = (tasks) => {
    return (
        <div>
      { tasks.length == 0? "NO TODOS TO DISPLAY": tasks.map((task) =>{
          return <Task task={task}  key={task.key}/>
    }) 
       } 
       </div>                                           
    );
};

export default Task;