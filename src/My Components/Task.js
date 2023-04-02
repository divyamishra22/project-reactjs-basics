// import React from 'react'

const Task = ({task , onDelete}) => {
  return (
    <div className="task flex-row">
      <div className="tasks flex-col">
       <h3>{task.title}</h3>
       <p>{task.description}</p>
       </div>
       <div className='tasks-btn flex-row'>
       <button className="btn btn-danger btn-sm del-btn" onClick={()=>{onDelete(task)}}>Delete</button> 
       </div>
    </div>
  )
}

export default Task;