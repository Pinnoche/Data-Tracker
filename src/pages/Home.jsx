// import { Link } from 'react-router-dom'
// import { IoIosArrowRoundDown } from "react-icons/io";
// import Diagram from "../components/Diagram"
import TS from "../components/TS";
import { useState } from "react";
import { TbLivePhoto } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { MdOutlineAutoGraph } from "react-icons/md";
import { MdFactCheck } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

function Home() {
  const [live, setLive ] = useState(false);
  const [dashboard, setDashboard ] = useState(false);
  const [aedc, setAedc ] = useState(false);

  const handleAedc = () => {
    setDashboard(false);
    setAedc(true);
  }
  return (
    <div className='mx-auto grid grid-cols-7 w-full min-h-screen'>
       <div className="relative px-3 col-span-1 shadow-md shadow-white bg-gray-100 text-[#222B44]">
            {live && <div onMouseLeave={() => setLive(false)} className="absolute top-9 left-48 w-full px-3 py-1 rounded-sm bg-white shadow-white shadow-sm border-2 border-white">
              <div className="bg-gray-300 py-2 px-4 rounded-md mb-1 cursor-pointer">Everywhere</div>
              <div className="hover:bg-gray-200 py-2 px-4 rounded-md mb-1 cursor-pointer">AEDC</div>
              <div className="hover:bg-gray-200 py-2 px-4 rounded-md mb-1 cursor-pointer">IEDC</div>
              <div className="hover:bg-gray-200 py-2 px-4 rounded-md mb-1 cursor-pointer">KDDC</div>
              <div className="hover:bg-gray-200 py-2 px-4 rounded-md mb-1 cursor-pointer">AEDC</div>
              <div className="hover:bg-gray-200 py-2 px-4 rounded-md mb-1 cursor-pointer">AEDC</div>
              <div className="hover:bg-gray-200 py-2 px-4 rounded-md mb-1 cursor-pointer">AEDC</div>
            </div>}
          <div className="mb-1">GridStatus</div>
          <div onMouseEnter={ () => setLive(false)} className="p-1">
          </div>
          <div onMouseEnter={ () => setLive(true)} className="py-2 pl-2 border-none rounded-md hover:bg-gray-400 flex items-center justify-between cursor-pointer">
            <div className="flex items-center">
            <TbLivePhoto className="mr-3" />
            <p>Live</p>
            </div>
            <div>
              <MdOutlineKeyboardArrowRight />
            </div> 
          </div>
          <div onMouseEnter={ () => setLive(false)} className="p-1">
          </div>
         
          <div onClick={() => setDashboard(true)} className="py-2 pl-2 border-none rounded-md hover:bg-gray-400 mb-2 flex items-center cursor-pointer">
            <div className="flex items-center">
            <MdOutlineDashboard className="mr-3" />
            <p>Dashboards</p>
            </div>
          </div>
          <div className="py-2 pl-2 border-none rounded-md hover:bg-gray-400 mb-2 flex items-center cursor-pointer">
            <div className="flex items-center">
            <HiOutlineBellAlert className="mr-3" />
            <p>Alerts</p>
            </div>
            </div>
          <div className="py-2 pl-2 border-none rounded-md hover:bg-gray-400 mb-2 flex items-center cursor-pointer">
            <div className="flex items-center">
            <MdOutlineAutoGraph className="mr-3" />
            <p>Graph/Trends</p>
            </div>
          </div>
          <div className="py-2 pl-2 border-none rounded-md hover:bg-gray-400 mb-2 flex items-center cursor-pointer">
            <div className="flex items-center">
            <MdFactCheck className="mr-3" />
            <p>Fact Sheet</p>
            </div>
          </div>
          <div className="py-2 pl-2 border-none rounded-md hover:bg-gray-400 mb-2 flex items-center cursor-pointer">
            <div className="flex items-center">
            <IoIosArrowDown className="mr-3" />
            <p>More</p>
            </div>
          </div>
          <div className="py-2 pl-2 border-none rounded-md hover:bg-gray-400 mb-2 flex items-center cursor-pointer">
            <div className="flex items-center">
            <IoSettingsOutline className="mr-3" />
            <p>Settings</p>
            </div>
          </div>
          <div className="py-2 pl-2 border-none rounded-md hover:bg-gray-400 mb-2 flex items-center cursor-pointer">
            <p>All Apps</p>
          </div>
          
        </div>
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
