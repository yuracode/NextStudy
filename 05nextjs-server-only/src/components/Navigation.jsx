// src/components/Navigation.jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navigation.css';

export const Navigation = () => {
  const pathname = usePathname(); // 現在のパスを取得

  return (
    <nav className="nav">
      <Link 
        href="/" 
        className={pathname === '/' ? 'active' : ''}
      >
        自己紹介
      </Link>
      <Link 
        href="/hobby" 
        className={pathname === '/hobby' ? 'active' : ''}
      >
        趣味
      </Link>
    </nav>
  );
}
