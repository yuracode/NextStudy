// src/app/api/todos/route.js
import { NextResponse } from 'next/server';
import { getTodos, addTodo } from './todoData';

// GET /api/todos - 全件取得
export async function GET() {
  const todos = getTodos();
  return NextResponse.json(todos);
}

// POST /api/todos - 新規作成
export async function POST(request) {
  try {
    const body = await request.json();
    
    // バリデーション
    if (!body.text || body.text.trim() === '') {
      return NextResponse.json(
        { error: 'テキストが必要です' },
        { status: 400 }
      );
    }
    
    const newTodo = addTodo(body.text);
    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'リクエストの処理に失敗しました' },
      { status: 500 }
    );
  }
}