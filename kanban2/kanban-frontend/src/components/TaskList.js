import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, moveTask, deleteTask }) => {
    const categories = {
        'A Fazer': [],
        'Em Progresso': [],
        'Concluído': []
    };

    tasks.forEach(task => {
        categories[task.status].push(task);
    });

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {Object.keys(categories).map(status => (
                <div key={status} style={{ flex: 1, margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
                    <h2>{status}</h2>
                    <ul>
                        {categories[status].map(task => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                moveTask={moveTask}
                                deleteTask={deleteTask}
                            />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default TaskList;