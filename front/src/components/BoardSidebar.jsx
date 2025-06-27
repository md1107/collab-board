import React from 'react';

export default function BoardSidebar({ boards, onSelect }) {
  return (
    <ul>
      {boards.map(board => (
        <li key={board._id}>
          <button onClick={() => onSelect(board)}>{board.name}</button>
        </li>
      ))}
    </ul>
  );
}
