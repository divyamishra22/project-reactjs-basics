import React from 'react'

const TodoList = () => {
    return (
        <div className='container flex-col'>
            <h1 className='head'>Todo List</h1>
            <form className='form flex-col' >
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
