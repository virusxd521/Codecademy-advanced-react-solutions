import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Exercise2 } from './pages/Exercise2';
import { Exercise3 } from './pages/Exercise3';
import { Exercise4 } from './pages/Exercise4';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/exercises/2' exact element={<Exercise2 />} />
        <Route path='/exercises/3' exact element={<Exercise3 />} />
        <Route path='/exercises/4' exact element={<Exercise4 />} />
      </Routes>
    </Router>
  );
}

export default App;
