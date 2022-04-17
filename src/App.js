import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ExerciseTwo } from './pages/ExerciseTwo';

function App() {
  return (
    <Router>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/exercises/2'>
        <ExerciseTwo />
      </Route>
    </Router>
  );
}

export default App;
