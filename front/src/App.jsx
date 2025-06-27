import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BoardSidebar from './components/BoardSidebar';
import BoardDetail from './components/BoardDetail';
import CreateBoard from './components/CreateBoard';

export default function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);

  const fetchBoards = () => {
    axios.get('http://localhost:3000/boards').then(res => setBoards(res.data));
  };

  useEffect(() => { fetchBoards(); }, []);

  return (
    <div className="app-container">
      <div className="sidebar">
        <CreateBoard onCreate={fetchBoards} />
        <BoardSidebar boards={boards} onSelect={setSelectedBoard} />
      </div>
      <div className="main-view">
        {selectedBoard && <BoardDetail boardId={selectedBoard._id} />}
      </div>
    </div>
  );
}
