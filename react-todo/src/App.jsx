// src/App.js
import React, { useState, useEffect } from 'react';
import {TodoInput} from './components/TodoInput';
import {TodoItem} from './components/TodoItem';
import {Stats} from './components/Stats';
import './App.css';

const API_URL = 'http://localhost:3001/api/todos';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(true);

  // 画面が最初に表示されたときに一度だけ一覧を取得する
  useEffect(() => {
    fetchTodos();
  }, []);

  // APIから全件取得し、stateへ反映する（ローディング終了もここで）
  const fetchTodos = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTodos(data);
      setLoading(false);
    } catch (error) {
      console.error('取得エラー:', error);
      setLoading(false);
    }
  };

  // 新規追加：空文字は送らず、POSTの返却値をそのまま末尾に追加する
  const addTodo = async () => {
    if (inputText.trim() === '') return;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputText })
      });
      const newTodo = await response.json();

      setTodos([...todos, newTodo]); // 既存リストに新規を足す
      setInputText(''); // 入力欄をクリア
    } catch (error) {
      console.error('作成エラー:', error);
    }
  };

  // 完了フラグをトグル：PUTで更新し、該当IDだけ差し替える
  const toggleTodo = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT'
      });
      const updatedTodo = await response.json();

      setTodos(todos.map(todo =>
        todo.id === id ? updatedTodo : todo
      ));
    } catch (error) {
      console.error('更新エラー:', error);
    }
  };

  // 削除：DELETEの後、対象IDを取り除いた配列で上書きする
  const deleteTodo = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });

      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('削除エラー:', error);
    }
  };

  if (loading) {
    return <div className="container">読み込み中...</div>;
  }

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

      <Stats
        total={todos.length}
        done={todos.filter(t => t.completed).length}
      />
    </div>
  );
}

