// import React from 'react'

const Task = ({task , onDelete}) => {
  return (
    <div>
       <h3>{task.title}</h3>
       <p>{task.description}</p>
       <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(task)}}>Delete</button> 
    </div>
  )
}

export default Task;