import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import disco from "../Data/db.json";
import ibedc from "../Data/db2.json";
import TS from "../pages/disco/TS";
import SideBar from "../components/SideBar";
// import SubStation from "../pages/disco/SubStation";
import Sub2 from "../pages/disco/Sub2";

function Layout() {
  const datas = disco?.data || [];
  const ibedcData = ibedc || [];

  const [feeder, setFeeder] = useState(null);
  const [showSideBar, setShowSideBar] = useState(false);
  const [i_station, setI_station] = useState(null);
  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const filteredTsData = ibedcData.filter(
    (tsData) => tsData.transmission_station === feeder
  );
  const filteredfeeder33Data = filteredTsData.filter(
    (feeder_33) => feeder_33.injection_substation === i_station
  );

  return (
    <Router>
      <div className="flex bg-[#026487]">
        <SideBar
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
          handleSideBar={handleSideBar}
        />
        <div className={`w-full ${showSideBar && "w-[80%] ml-[15%]"}`}>
          <NavBar showSideBar={showSideBar} handleSideBar={handleSideBar} />
          <div className={`w-full min-h-screen h-full`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/ts"
                element={
                  <TS
                    datas={datas}
                    setFeeder={setFeeder}
                    ibedcData={ibedcData}
                  />
                }
              />
              <Route
                path="/substation"
                element={
                  <Sub2
                    // filteredTsData={filteredTsData}
                    // filteredfeeder33Data={filteredfeeder33Data}
                    // setI_station={setI_station}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Layout;
