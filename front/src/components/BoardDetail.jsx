import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskModal from './TaskModal';
import EditTaskModal from './EditTaskModal';

export default function BoardDetail({ boardId }) {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const fetchTasks = () => {
    axios.get(`https://collab-board-o93c.onrender.com/boards/${boardId}/tasks`).then(res => setTasks(res.data));
  };

  useEffect(() => { fetchTasks(); }, [boardId]);

  const deleteTask = async (id) => {
    await axios.delete(`https://collab-board-o93c.onrender.com/tasks/${id}`);
    fetchTasks();
  };

  const grouped = { 'To Do': [], 'In Progress': [], 'Done': [] };
  tasks.forEach(t => grouped[t.status]?.push(t));

  return (
    <div>
      <button onClick={() => setShowModal(true)}>+ Task</button>
      {showModal && <TaskModal boardId={boardId} onClose={() => { setShowModal(false); fetchTasks(); }} />}
      {editTask && <EditTaskModal task={editTask} onClose={() => setEditTask(null)} onRefresh={fetchTasks} />}

      <div className="columns">
        {Object.entries(grouped).map(([status, list]) => (
          <div className="column" key={status}>
            <h4>{status}</h4>
            {list.map(task => (
              <div key={task._id} className={`task ${task.priority.toLowerCase()}`}>
                <strong>{task.title}</strong>
                <p>{task.description}</p>
                <small>Due: {task.dueDate?.split('T')[0]}</small>
                <div>
                  <button onClick={() => setEditTask(task)}>Edit</button>
                  <button onClick={() => deleteTask(task._id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
