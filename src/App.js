import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AEDC from './pages/disco/AEDC';
// import TS from './pages/disco/TS';
function App() {
  return (
    <Router>
      <div className=''>
        <NavBar />
      </div>
      <div className='bg-white'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/disco/aedc' element={<AEDC />} />
            {/* <Route path='/disco/aedc/ts' element={<TS />} /> */}
        </Routes>

      </div>
        
    </Router>
  );
}

export default App;
