import React from 'react';

const TaskItem = ({ task, moveTask, deleteTask }) => {
    return (
        <li>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <button onClick={() => moveTask(task.id)}>Mover</button>
            <button onClick={() => deleteTask(task.id)}>Excluir</button>
        </li>
    );
};

export default TaskItem;