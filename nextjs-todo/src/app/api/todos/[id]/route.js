// src/app/api/todos/[id]/route.js
import { NextResponse } from 'next/server';
import { findTodo, toggleTodo, removeTodo } from '../todoData';

// PUT /api/todos/[id] - 完了状態トグル
export async function PUT(request, { params }) {
  const { id } = await params;
  
  const todo = toggleTodo(id);
  
  if (!todo) {
    return NextResponse.json(
      { error: 'Todoが見つかりません' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(todo);
}

// DELETE /api/todos/[id] - 削除
export async function DELETE(request, { params }) {
  const { id } = await params;
  
  const success = removeTodo(id);
  
  if (!success) {
    return NextResponse.json(
      { error: 'Todoが見つかりません' },
      { status: 404 }
    );
  }
  
  // 204 No Content（削除成功、レスポンスボディなし）
  return new NextResponse(null, { status: 204 });
}