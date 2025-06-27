import React, { useState } from 'react';
import axios from 'axios';

export default function EditTaskModal({ task, onClose, onRefresh }) {
  const [form, setForm] = useState(task);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const updateTask = async () => {
    await axios.put(`https://collab-board-o93c.onrender.com/tasks/${task._id}`, form);
    onClose();
    onRefresh();
  };

  return (
    <div className="modal">
      <h3>Edit Task</h3>
      <input name="title" value={form.title} onChange={handleChange} />
      <textarea name="description" value={form.description} onChange={handleChange}></textarea>
      <select name="status" value={form.status} onChange={handleChange}>
        <option>To Do</option><option>In Progress</option><option>Done</option>
      </select>
      <select name="priority" value={form.priority} onChange={handleChange}>
        <option>Low</option><option>Medium</option><option>High</option>
      </select>
      <input name="assignedTo" value={form.assignedTo} onChange={handleChange} />
      <input name="dueDate" type="date" value={form.dueDate?.split('T')[0]} onChange={handleChange} />
      <button onClick={updateTask}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
