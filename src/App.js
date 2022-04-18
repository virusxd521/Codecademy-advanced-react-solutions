import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Exercise2 } from './pages/Exercise2';
import { Exercise3 } from './pages/Exercise3';
import { Exercise4 } from './pages/Exercise4';

function App() {
  return (
    <Router>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/exercises/2'>
        <Exercise2 />
      </Route>
      <Route path='/exercises/3'>
        <Exercise3 />
      </Route>
      <Route path='/exercises/4'>
        <Exercise4 />
      </Route>
    </Router>
  );
}

export default App;
