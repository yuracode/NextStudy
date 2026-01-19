// src/app/layout.jsx
import './globals.css';
import '../components/Navigation.css';
import { Navigation } from '../components/Navigation.jsx';

export const metadata = {
  title: '自己紹介サイト',
  description: '佐々木博幸の自己紹介と趣味のページ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div className="site-wrapper">
          <main>
            <div className="container">
              <Navigation />
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}