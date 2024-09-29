import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NavBar from '../components/NavBar'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard';
import disco from '../Data/db.json';
import TS from '../pages/disco/TS';
import SideBar from '../components/SideBar'
import SubStation from '../pages/disco/SubStation';


function Layout() {
  const datas = disco?.data || [];
  
  const [feeder, setFeeder] = useState(null);
  const [showSideBar, setShowSideBar ] = useState(false);
  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  }

  const filteredTsData =  datas.filter(tsData => tsData.transmission_station === feeder);

 

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
                  <Route path='/ts' element={<TS datas={datas} setFeeder={setFeeder} />} />
                  <Route path='/substation' element={<SubStation filteredTsData={filteredTsData} />} />
              </Routes>
            </div>
        </div>
      </div>
  </Router>
  )
}

export default Layout;
