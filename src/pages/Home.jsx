// import { Link } from 'react-router-dom'
// import { IoIosArrowRoundDown } from "react-icons/io";
// import Diagram from "../components/Diagram"
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
        <div className="mx-auto p-8 border-2 border-black shadow-md shadow-white rounded-sm max-w-xl">
          <div className="border-b border-b-gray-400 grid grid-cols-5">
            <p className="col-span-3">Name</p>
            <p>Status</p>
          </div>
          <div className="grid grid-cols-5">
            <div className="col-span-3 px-3 pt-5 [&>p]:mb-2">
              <p>AEDC</p>
              <p>AEDC</p>
              <p>AEDC</p>
              <p>AEDC</p>
              <p>AEDC</p>
              <p>AEDC</p>
            </div>
          </div>
        </div>
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
