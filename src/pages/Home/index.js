import { Link } from 'react-router-dom';
import './styles.css';

export function Home() {
  return (
    <div className='container'>
      <h1>Advanced React: Optimization Lesson</h1>
      <p className='home-description'>
        Get started by clicking the links to each exercise:
      </p>
      <ul className='home-list'>
        <li>Exercise 1: Introduction</li>
        <li>
          <Link to='/exercises/2'>Exercise 2: useMemo()</Link>
        </li>
        <li>
          <Link to='/exercises/3'>Exercise 3: React.memo()</Link>
        </li>
        <li>
          <Link to='/exercises/4'>Exercise 4: useCallback()</Link>
        </li>
        <li>
          <Link to='/exercises/5'>Exercise 5: import()</Link>
        </li>
        <li>
          <Link to='/exercises/6'>Exercise 6: React.lazy()</Link>
        </li>
        <li>
          <Link to='/exercises/7'>Exercise 7: Suspense</Link>
        </li>
        <li>
          <Link to='/exercises/8'>
            Exercise 8: When to implement optimizations
          </Link>
        </li>
        <li>Exercise 9: Review</li>
      </ul>
    </div>
  );
}
