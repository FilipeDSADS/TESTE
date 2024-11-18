import React, { useState } from 'react';

const TaskForm = ({ createTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('baixa'); // Valor padrão

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            title,
            description,
            priority,
            status: 'A Fazer' // Status inicial
        };
        createTask(newTask);
        setTitle('');
        setDescription('');
        setPriority('baixa');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="baixa">Baixa</option>
                <option value="média">Média</option>
                <option value="alta">Alta</option>
            </select>
            <button type="submit">Criar Tarefa</button>
        </form>
    );
};

export default TaskForm;