import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export const Exercise5 = () => {
  return (
    <div className='container'>
      <Link to='/'>← Back to Home</Link>
      <h1>Exercise 5: Code Splitting Modules</h1>
    </div>
  );
};
