# Next.js学習用リポジトリ

このリポジトリは、Reactの基礎からREST API、そしてNext.jsまで段階的に学習するための教材です。

## 学習の流れ

1. **React基礎** → [`react-todo/`](react-todo/)
2. **REST API基礎** → [`todo-lesson/express-api/`](todo-lesson/express-api/)
3. **Next.js** → [`nextjs-todo/`](nextjs-todo/)

---

## 1. React基礎 (`react-todo/`)

### 概要
Create React Appで作成された、Reactの基礎を学ぶためのTodoアプリケーションです。

### 学習内容
- Reactコンポーネントの基本
- `useState`と`useEffect`フック
- コンポーネント間のprops受け渡し
- イベントハンドリング
- 外部API連携（fetch）
- CRUD操作の実装

### 主要なコンポーネント
- `TodoInput.js` - Todo入力フォーム
- `TodoItem.js` - Todo項目の表示と操作
- `Stats.js` - 統計情報の表示

### 起動方法
```bash
cd react-todo
npm install
npm start
```

**注意:** このアプリは`localhost:3001`で動作するREST APIサーバーと連携して動作します。

---

## 2. REST API基礎 (`todo-lesson/express-api/`)

### 概要
Express.jsを使用した、シンプルなREST APIサーバーです。CRUD操作の基本を学べます。

### 学習内容
- REST APIの基本概念（GET, POST, PUT, DELETE）
- Express.jsの基本
- CORSの設定
- ルーティング
- HTTPステータスコード
- JSONデータの送受信

### エンドポイント
- `GET /api/todos` - 全Todo取得
- `POST /api/todos` - 新規Todo作成
- `PUT /api/todos/:id` - Todo更新（完了/未完了切り替え）
- `DELETE /api/todos/:id` - Todo削除

### 起動方法
```bash
cd todo-lesson/express-api
npm install
node server.js
```

サーバーは `http://localhost:3001` で起動します。

---

## 3. Next.js (`nextjs-todo/`)

### 概要
Next.jsで作成されたTodoアプリケーションです。ReactアプリをNext.jsに移行し、API RoutesとApp Routerを学びます。

### 学習内容
- Next.jsのApp Router
- ファイルベースルーティング
- API Routes（サーバーサイドAPI）
- クライアントコンポーネント（`'use client'`）
- Next.jsのプロジェクト構造
- 相対パスでのAPI呼び出し

### プロジェクト構造
```
src/
├── app/
│   ├── api/
│   │   └── todos/      # API Routes（サーバーサイド）
│   │       ├── route.js
│   │       ├── todoData.js
│   │       └── [id]/
│   │           └── route.js
│   ├── layout.js       # ルートレイアウト
│   ├── page.js         # ホームページ
│   └── globals.css
└── components/         # 再利用可能なコンポーネント
    ├── TodoInput.js
    ├── TodoItem.js
    └── Stats.js
```

### 起動方法
```bash
cd nextjs-todo
npm install
npm run dev
```

アプリケーションは `http://localhost:3000` で起動します。

---

## 学習のポイント

### React → Express API → Next.jsの比較

| 項目 | React + Express | Next.js |
|------|----------------|---------|
| **サーバー** | 別途Express必要 | 統合（API Routes） |
| **ポート** | React: 3000, API: 3001 | 1つ（3000） |
| **API呼び出し** | `http://localhost:3001/api/...` | `/api/...` (相対パス) |
| **デプロイ** | 2つのサーバー必要 | 1つで完結 |
| **ルーティング** | React Routerが必要 | ファイルベース |

### React todoとNext.js todoの主な違い

1. **API呼び出しのURL**
   - React: `fetch('http://localhost:3001/api/todos')`
   - Next.js: `fetch('/api/todos')`

2. **プロジェクト構造**
   - React: `src/`直下にコンポーネント
   - Next.js: `src/app/`がルーティングの基準

3. **サーバー統合**
   - React: 外部APIサーバーと通信
   - Next.js: 同一アプリ内にAPI Routes

---

## 学習の進め方

1. **まず`react-todo`でReactの基礎を理解する**
   - コンポーネントの作り方
   - stateの管理方法
   - useEffectでのAPI呼び出し

2. **`express-api`でREST APIの仕組みを理解する**
   - HTTPメソッドの意味
   - エンドポイント設計
   - CORSの必要性

3. **`nextjs-todo`でNext.jsへの移行を学ぶ**
   - ReactアプリとNext.jsの違い
   - API Routesの実装方法
   - App Routerの使い方

---

## 必要な環境

- Node.js (推奨: v18以上)
- npm または yarn
- テキストエディタ（VS Code推奨）

## 参考リソース

- [React公式ドキュメント](https://react.dev/)
- [Express.js公式ドキュメント](https://expressjs.com/)
- [Next.js公式ドキュメント](https://nextjs.org/docs)

---

## ライセンス

このプロジェクトは学習用教材です。自由に使用・改変してください。
