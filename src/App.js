import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Exercise2 } from './pages/Exercise2';

function App() {
  return (
    <Router>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/exercises/2'>
        <Exercise2 />
      </Route>
    </Router>
  );
}

export default App;
