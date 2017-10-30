import React from 'react';
import { Link } from 'react-router-dom';

const Top = () => (
  <div>
    <ul>
      <li><Link to="/admin">管理者ページ</Link></li>
      <li><Link to="/Login">ログイン</Link></li>
    </ul>
  </div>
);

export default Top;
