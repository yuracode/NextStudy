// src/components/TodoInput.js
import React from 'react';

const TodoInput = ({ value, onChange, onSubmit }) => (
  <div className="row">
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
      placeholder="新しいタスクを入力"
    />
    <button onClick={onSubmit}>追加</button>
  </div>
);

export default TodoInput;