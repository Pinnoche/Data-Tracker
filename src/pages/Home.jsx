// import { Link } from 'react-router-dom'
// import { IoIosArrowRoundDown } from "react-icons/io";
// import Diagram from "../components/Diagram"
import TS from "../components/TS";
import SideBar from "../components/SideBar";
import { useState } from "react";

function Home() {
  const [dashboard, setDashboard ] = useState(false);
  const [aedc, setAedc ] = useState(false);

  const handleAedc = () => {
    setDashboard(false);
    setAedc(true);
  }
  return (
    <div className='mx-auto grid grid-cols-7 w-full min-h-screen'>
      <SideBar setDashboard={setDashboard} />
       
        <div className="cols-span-6 w-screen">
      <header className="bg-gray-100 p-4 text-white">
       <h1 className="font-semibold text-[#203266] text-xl ml-2 hover:underline cursor-pointer">Muti-station View</h1>
      </header>
      {dashboard && <div>
        <div className="mx-auto px-5 py-4 bg-gray-100 mt-8 rounded-sm max-w-3xl">
          <div className="border-b border-b-gray-400 grid grid-cols-5 [&>p]:text-lg">
            <p className="col-span-3 text-center">Name</p>
            <p className="col-span-2 text-center">Description</p>
          </div>
          
          <div className="grid grid-cols-6 space-x-0 text-center">
            <div className="col-span-3 [&>p]:mb-2 [&>p]:border-b [&>p]:border-b-gray-400">
              <p onClick={() => handleAedc()} className="w-full hover:bg-blue-900 hover:rounded-md hover:text-white cursor-pointer">AEDC</p>
              <p className="w-full hover:bg-blue-900 hover:rounded-md hover:text-white cursor-default">IBEDC</p>
              <p className="w-full hover:bg-blue-900 hover:rounded-md hover:text-white cursor-default">IKEDC</p>
              <p className="w-full hover:bg-blue-900 hover:rounded-md hover:text-white cursor-default">EKEDC</p>
              <p className="w-full hover:bg-blue-900 hover:rounded-md hover:text-white cursor-default">EEDC</p>
              <p className="w-full hover:bg-blue-900 hover:rounded-md hover:text-white cursor-default">BEDC</p>
              <p className="w-full hover:bg-blue-900 hover:rounded-md hover:text-white cursor-default">JEDCPLC</p>
              <p className="w-full hover:bg-blue-900 hover:rounded-md hover:text-white cursor-default">KAEDCO</p>
              <p className="w-full hover:bg-blue-900 hover:rounded-md hover:text-white cursor-default">KEDCO</p>
              <p className="w-full hover:bg-blue-900 hover:rounded-md hover:text-white cursor-default">PHEDC</p>
              <p className="w-full hover:bg-blue-900 hover:rounded-md hover:text-white cursor-default">YEDC</p>
            </div>

            {/* Description */}
            <div className="col-span-3 w-full [&>p]:mb-2 [&>p]:border-b [&>p]:border-b-gray-400 text-left">
              <p>Abuja Electricity Destribution Company</p>
              <p>Ibadan Electricity Distribution Plc</p>
              <p>Ikeja Electricity Distribution Company</p>
              <p>Eko Electricity Distribution Plc</p>
              <p>Enugu Electricity Distribution Plc</p>
              <p>Benin Electricity Distribution Plc</p>
              <p>Jos Electricity Distribution Plc</p>
              <p>Kaduna Electricity Distribution Plc</p>
              <p>Kano Electricity Distribution Plc</p>
              <p>Port Harcourt Electricity Distribution Plc</p>
              <p>Yola Electricity Distribution Company Plc</p>
            </div>
          </div>
        </div>
      </div>}

      {/* AEDC */}
      {aedc && <div>
        <TS />
      </div>}
      {/* <div className="bg-white w-full grid grid-cols-3 gap-14 p-8 ">
       
        <Diagram />
       
        <Diagram />

       
        <Diagram />

        <Diagram />
        
      </div> */}
  </div>
      
</div>
  )
}

export default Home
