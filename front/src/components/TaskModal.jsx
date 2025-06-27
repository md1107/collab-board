import React, { useState } from 'react';
import axios from 'axios';

export default function TaskModal({ boardId, onClose }) {
  const [form, setForm] = useState({
    title: '', description: '', status: 'To Do', priority: 'Low',
    assignedTo: '', dueDate: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const createTask = async () => {
    await axios.post(`http://localhost:3000/boards/${boardId}/tasks`, form);
    onClose();
  };

  return (
    <div className="modal">
      <h3>New Task</h3>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <select name="status" onChange={handleChange}>
        <option>To Do</option><option>In Progress</option><option>Done</option>
      </select>
      <select name="priority" onChange={handleChange}>
        <option>Low</option><option>Medium</option><option>High</option>
      </select>
      <input name="assignedTo" placeholder="Assigned To" onChange={handleChange} />
      <input name="dueDate" type="date" onChange={handleChange} />
      <button onClick={createTask}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
