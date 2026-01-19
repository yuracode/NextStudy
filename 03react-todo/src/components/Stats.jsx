import React from 'react';

export const Stats = ({ total, done }) => (
  <div className="stats">
    全{total}件 / 完了{done}件
  </div>
);
