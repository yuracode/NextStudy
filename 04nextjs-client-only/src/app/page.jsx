// src/app/page.js
'use client';

import Link from 'next/link.js';
import {Navigation} from '../components/Navigation.jsx';
import './page.css';

export default function Home() {
  return (
    <div className="container">
      <Navigation />
      
      <h1>自己紹介</h1>
      
      <div className="profile">
        <h2>佐々木 博幸</h2>
        <p>北海道サイバークリエイターズ大学校の講師です。</p>
        
        <div className="info-section">
          <h3>担当科目</h3>
          <ul>
            <li>Java / Spring Boot</li>
            <li>JavaScript / Node.js / React</li>
            <li>Python</li>
            <li>データベース / ネットワーク</li>
            <li>基本情報技術者試験対策</li>
          </ul>
        </div>

        <div className="info-section">
          <h3>保有資格</h3>
          <ul>
            <li>国家資格キャリアコンサルタント</li>
            <li>ネットワークスペシャリスト</li>
            <li>第二種電気工事士</li>
          </ul>
        </div>

        <div className="link-area">
          <Link href="/hobby" className="btn">
            趣味のページへ →
          </Link>
        </div>
      </div>
    </div>
  );
}