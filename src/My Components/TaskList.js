import Task from   '../My Components/Task';      ;
// import React from 'react';

    const TaskList = ({tasks , onDelete}) => {
    return (
        <div className='con-3'>
      { tasks?.length? tasks.map((task) => 
         <Task task={task} key={task.key} onDelete={onDelete} />) :"NO TODOS TO DISPLAY" }
       </div>                                           
    );
};

export default TaskList;