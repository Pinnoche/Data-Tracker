import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NavBar from '../components/NavBar'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard';
import TS from '../pages/disco/TS';
import SideBar from '../components/SideBar'

function Layout() {
  const [showSideBar, setShowSideBar ] = useState(false);
  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  }
  return (
    <Router>
      <div className="flex bg-[#026487]">
        <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} handleSideBar={handleSideBar} />
        <div className={`w-full ${showSideBar && "w-[80%] ml-[15%]"}`}>
            <NavBar showSideBar={showSideBar} handleSideBar={handleSideBar} />
            <div className={`w-full min-h-screen h-full `}>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/disco/ts' element={<TS />} />
              </Routes>
            </div>
        </div>
      </div>
  </Router>
  )
}

export default Layout;
