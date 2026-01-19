// src/app/layout.js
import './globals.css';

export const metadata = {
  title: '自己紹介サイト',
  description: '佐々木博幸の自己紹介と趣味のページ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div className="site-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}