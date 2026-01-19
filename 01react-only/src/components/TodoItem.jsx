import React from 'react';

export const TodoItem = ({ todo, onToggle, onDelete }) => (
  <li className="todo">
    <label className="todo-label">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className={todo.completed ? 'done' : ''}>{todo.text}</span>
    </label>
    <button onClick={() => onDelete(todo.id)}>削除</button>
  </li>
);
