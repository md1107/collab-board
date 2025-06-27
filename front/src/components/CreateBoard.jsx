import React, { useState } from 'react';
import axios from 'axios';

export default function CreateBoard({ onCreate }) {
  const [name, setName] = useState('');

  const createBoard = async () => {
    if (!name.trim()) return;
    await axios.post('http://localhost:3000/boards', { name });
    onCreate();
    setName('');
  };

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="New Board" />
      <button onClick={createBoard}>Add</button>
    </div>
  );
}
