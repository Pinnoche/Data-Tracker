import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AEDC from './pages/disco/AEDC';
import TS from './pages/disco/TS';
import Time from './components/Time';
function App() {
  return (
    <Router>
      <div className=''>
        <NavBar />
      </div>
      <div className='px-8 min-h-screen bg-[#08122E]'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/disco/aedc' element={<AEDC />} />
            <Route path='/disco/aedc/ts' element={<TS />} />
        </Routes>

      </div>
        <div className='bg-[#08122E]'>
          <Time />
        </div>
        
    </Router>
  );
}

export default App;
