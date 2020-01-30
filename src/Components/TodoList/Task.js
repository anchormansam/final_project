import React from 'react'

export default ({message, id, deleteTask}) => (
    <div className="Task">
        <p>
            {message} | Id: {id}
        </p>
        <div>
            <button onClick={() => deleteTask(id)}>
                Delete Task
            </button>
        </div>
    </div>
)