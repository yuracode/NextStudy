// src/components/Stats.js
import React from 'react';

const Stats = ({ total, done }) => (
  <div className="stats">
    全{total}件 / 完了{done}件
  </div>
);

export default Stats;