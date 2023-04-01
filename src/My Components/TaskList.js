import Task from   '../My Components/Task';      ;
// import React from 'react';

    const TaskList = ({tasks}) => {
    return (
        <div>
      { tasks?.length? tasks.map((task) => 
         <Task task={task} key={task.key} />) :"NO TODOS TO DISPLAY" }
       </div>                                           
    );
};

export default TaskList;