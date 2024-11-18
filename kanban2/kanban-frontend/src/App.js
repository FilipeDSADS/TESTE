import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await axios.get('http://localhost:8080/tasks');
            setTasks(response.data);
        };
        fetchTasks();
    }, []);

    const createTask = async (newTask) => {
        try {
            const response = await axios.post('http://localhost:8080/tasks', newTask);
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };

    const moveTask = async (id) => {
        try {
            await axios.put(`http://localhost:8080/tasks/${id}/move`);
            const updatedTasks = tasks.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        status: task.status === "A Fazer" ? "Em Progresso" : "Concluído"
                    };
                }
                return task;
            });
            setTasks(updatedTasks);
        } catch (error) {
            console.error("Error moving task:", error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/tasks/${id}`);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <div>
            <h1>Kanban</h1>
            <TaskForm createTask={createTask} />
            <TaskList tasks={tasks} moveTask={moveTask} deleteTask={deleteTask} />
        </div>
    );
};

export default App;