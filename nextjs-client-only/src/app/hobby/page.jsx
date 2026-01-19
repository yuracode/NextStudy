// src/app/hobby/page.js
'use client';

import Link from 'next/link';
import {Navigation} from '../../components/Navigation.jsx';
import '../page.css';

export default function HobbyPage() {
  const hobbies = [
    {
      title: 'DIY（木工・電気工作）',
      description: '電動丸鋸、インパクトドライバー、トリマーなど約20万円分の工具を使って色々作ってます。',
      icon: '🔨'
    },
    {
      title: '園芸',
      description: '芝生管理、野菜作り、花の栽培を楽しんでいます。',
      icon: '🌱'
    },
    {
      title: 'ドライブ',
      description: '2018年式アルファロメオ ジュリア ヴェローチェ Q4で北海道をドライブ。',
      icon: '🚗'
    },
    {
      title: 'スポーツ観戦',
      description: 'コンサドーレ札幌応援、カーリング、Formula 1観戦。',
      icon: '⚽'
    }
  ];

  return (
    <div className="container">
      <Navigation />
      
      <h1>趣味</h1>
      
      <div className="hobby-grid">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <div className="hobby-icon">{hobby.icon}</div>
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>

      <div className="link-area">
        <Link href="/" className="btn">
          ← 自己紹介に戻る
        </Link>
      </div>
    </div>
  );
}