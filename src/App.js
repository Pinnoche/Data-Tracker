import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AEDC from './pages/disco/AEDC';
function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/disco/aedc' element={<AEDC />} />
        </Routes>
  
    </Router>
  );
}

export default App;
