import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NavBar from '../components/NavBar'
import Home from '../pages/Home'
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
            <NavBar showSideBar={showSideBar} />
            <div className={`w-full min-h-screen `}>
              <Routes>
                  <Route path="/" element={<Home />} />
                  {/* <Route path='/disco/aedc/ts' element={<TS />} /> */}
              </Routes>
            </div>
        </div>
      </div>
  </Router>
  )
}

export default Layout;
