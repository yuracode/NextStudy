import React, { useState } from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { Stats } from './components/Stats';
import './App.css';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  // 新規追加：空文字は送らず、新しいTodoオブジェクトを末尾に追加する
  const addTodo = () => {
    if (inputText.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInputText('');
  };

  // 完了フラグをトグル：該当IDだけ差し替える
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // 削除：対象IDを取り除いた配列で上書きする
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="container">
      <h1>ToDoリスト</h1>

      <TodoInput
        value={inputText}
        onChange={setInputText}
        onSubmit={addTodo}
      />

      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>

      <Stats total={todos.length} done={completedCount} />
    </div>
  );
};

export default App;
