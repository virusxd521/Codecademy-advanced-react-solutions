import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export const Exercise7 = () => {
  return (
    <div className='container'>
      <Link to='/'>← Back to Home</Link>
      <h1>Exercise 7: Suspense</h1>
    </div>
  );
};
