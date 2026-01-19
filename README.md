# Next.js学習用リポジトリ

このリポジトリは、Reactの基礎からREST API、そしてNext.jsまで段階的に学習するための教材です。

## 学習の流れ

1. **React基礎** → [`react-todo/`](react-todo/)
2. **REST API基礎** → [`todo-lesson/express-api/`](todo-lesson/express-api/)
3. **Next.js基礎（Client Components）** → [`nextjs-client-only/`](nextjs-client-only/)
4. **Next.js基礎（Server Components）** → [`nextjs-server-only/`](nextjs-server-only/)
5. **Next.js実践（API統合）** → [`nextjs-todo/`](nextjs-todo/)

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

## 3. Next.js基礎（Client Components） (`nextjs-client-only/`)

### 概要
Next.jsのClient Componentsの概念を学ぶためのプロジェクトです。`'use client'`ディレクティブを使用してクライアントサイドで実行するコンポーネントの動作を理解します。

### 学習内容
- `'use client'`ディレクティブの使用方法
- Client Componentsの特徴
- クライアントサイドでのstate管理
- ブラウザのみで実行されるコンポーネント
- インタラクティブなUI の実装

### 主要なコンポーネント
- `Navigation.js` - クライアント側で動作するナビゲーション
- `page.js` - `'use client'`で指定されたページ

### 起動方法
```bash
cd nextjs-client-only
npm install
npm run dev
```

アプリケーションは `http://localhost:3000` で起動します。

---

## 4. Next.js基礎（Server Components） (`nextjs-server-only/`)

### 概要
Next.jsのServer Componentsの概念を学ぶためのプロジェクトです。デフォルトのServer Componentsでサーバーサイドで実行される処理を理解します。

### 学習内容
- Server Componentsの特徴（デフォルト動作）
- サーバーサイドでの処理
- `'use client'`ディレクティブなしのコンポーネント
- データベースアクセスやAPI呼び出し（サーバー側）
- パフォーマンスとセキュリティの向上

### 主要なコンポーネント
- `page.js` - Server Componentとして動作するページ

### 起動方法
```bash
cd nextjs-server-only
npm install
npm run dev
```

アプリケーションは `http://localhost:3000` で起動します。

---

## 5. Next.js実践（API統合） (`nextjs-todo/`)

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

### Client Components vs Server Components

| 項目 | Client Components | Server Components |
|------|-------------------|-------------------|
| **ディレクティブ** | `'use client'` で指定 | デフォルト（指定不要） |
| **実行場所** | ブラウザ | サーバー |
| **使用可能なAPI** | `useState`, `useEffect`, イベントハンドラ | データベース、シークレット |
| **ファイルサイズ** | ブラウザにバンドル | サーバーのみ |
| **インタラクション** | リアルタイム（ユーザー入力など） | 初期レンダリング |

### Next.jsにおけるコンポーネント選択のガイドライン

1. **Server Components を使用する場合**
   - データベースにアクセスする必要がある
   - APIのシークレットキーが必要
   - サーバーサイドでのロジック処理が必要

2. **Client Components を使用する場合**
   - `useState`, `useEffect` などのフックが必要
   - ブラウザのAPIを使用する（`window`, `localStorage`など）
   - イベントリスナーやインタラクティブな処理が必要

### React → Express API → Next.jsの比較

| 項目 | React + Express | Next.js（Client） | Next.js（Server） |
|------|----------------|------------------|------------------|
| **サーバー** | 別途Express必要 | - | 統合 |
| **ポート** | React: 3000, API: 3001 | 3000 | 3000 |
| **API呼び出し** | `http://localhost:3001/api/...` | `/api/...` | サーバー側 |
| **デプロイ** | 2つのサーバー必要 | 1つで完結 | 1つで完結 |
| **ルーティング** | React Routerが必要 | ファイルベース | ファイルベース |
| **データ取得** | useEffectで実装 | useEffectで実装 | サーバー側で実装 |

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

1. **`react-todo`でReactの基礎を理解する**
   - コンポーネントの作り方
   - stateの管理方法
   - useEffectでのAPI呼び出し

2. **`express-api`でREST APIの仕組みを理解する**
   - HTTPメソッドの意味
   - エンドポイント設計
   - CORSの必要性

3. **`nextjs-client-only`でClient Componentsを学ぶ**
   - `'use client'`ディレクティブの使用法
   - useState と useEffect の動作
   - クライアントサイドのインタラクション

4. **`nextjs-server-only`でServer Componentsを学ぶ**
   - Server Componentsのデフォルト動作
   - サーバーサイドロジックの実装
   - パフォーマンスの向上

5. **`nextjs-todo`でNext.jsの実践を学ぶ**
   - Client Components と Server Components の混在
   - API Routes の実装
   - 完全なアプリケーション実装

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
