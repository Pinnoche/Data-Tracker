import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AEDC from './pages/disco/AEDC';
import TS from './pages/disco/TS';
function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/disco/aedc' element={<AEDC />} />
            <Route path='/disco/aedc/ts' element={<TS />} />
        </Routes>
  
    </Router>
  );
}

export default App;
