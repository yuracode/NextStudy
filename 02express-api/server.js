// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// ミドルウェア設定
app.use(cors()); // React（別ポート）からのアクセスを許可
app.use(express.json()); // JSONデータを受け取れるようにする

// データ保存用（メモリ上に保存、サーバー再起動で消える）
let todos = [
  { id: 1, text: '牛乳を買う', completed: false },
  { id: 2, text: 'Reactを勉強する', completed: true }
];
let nextId = 3; // 新規作成時のID管理用

// ========== API エンドポイント ==========

// 全件取得 GET /api/todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// 新規作成 POST /api/todos
app.post('/api/todos', (req, res) => {
  const newTodo = {
    id: nextId++,
    text: req.body.text,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo); // 201 = Created
});

// 更新 PUT /api/todos/:id
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  
  // completedの状態を反転
  todo.completed = !todo.completed;
  res.json(todo);
});

// 削除 DELETE /api/todos/:id
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  
  todos.splice(index, 1);
  res.status(204).send(); // 204 = No Content（削除成功）
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

