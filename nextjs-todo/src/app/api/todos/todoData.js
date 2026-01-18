// src/app/api/todos/todoData.js
// メモリ上のデータ（サーバー再起動で消える）
// 本番ではDBを使用する
export let todos = [
  { id: 1, text: '牛乳を買う', completed: false },
  { id: 2, text: 'Next.jsを勉強する', completed: true }
];

export let nextId = 3;

// データ操作用のヘルパー関数
export const getTodos = () => todos;

export const addTodo = (text) => {
  const newTodo = {
    id: nextId++,
    text,
    completed: false
  };
  todos.push(newTodo);
  return newTodo;
};

export const findTodo = (id) => {
  return todos.find(t => t.id === parseInt(id));
};

export const toggleTodo = (id) => {
  const todo = findTodo(id);
  if (todo) {
    todo.completed = !todo.completed;
  }
  return todo;
};

export const removeTodo = (id) => {
  const index = todos.findIndex(t => t.id === parseInt(id));
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
};