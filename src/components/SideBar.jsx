
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { TbLivePhoto } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { MdOutlineAutoGraph } from "react-icons/md";
import { MdFactCheck } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

function SideBar({ handleSideBar, showSideBar, setDashboard }) {
  
  
  const [live, setLive ] = useState(false);
  const [more, setMore ] = useState(false);
  const [arrowDown, setArrowDown ] = useState(true);
  const [arrowUp, setArrowUp ] = useState(false);
  const handleMore = () => {
        setMore(!more);
    }
    const handleArrow = () => {
        setArrowDown(!arrowDown);
        setArrowUp(!arrowUp);
    }
    const handleAll = () => {
        handleArrow();
        handleMore();
    }
  return (
    <div className={` ${showSideBar && "m-0"}`}>
        <div onClick={handleSideBar} className={`cursor-pointer text-white ${showSideBar && "hidden"}`}>
            <IoMdMenu />
        </div>
        {showSideBar && <div className="w-[15%] fixed min-h-screen py-1 px-3 shadow-white bg-gray-100 text-[#026487]">
          <div className={`flex items-baseline gap-4 cursor-pointer ${showSideBar ? "block" : "hidden"}`} onClick={handleSideBar} >
            <p className="text-lg font-semibold">X</p>
            <p className="font-semibold">Close</p>
          </div>
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
      <div onClick={() => handleAll()} className="py-2 pl-2 border-none rounded-md hover:bg-gray-400 mb-2 flex items-center cursor-pointer">
        <div className="flex items-center">
        {arrowDown &&<IoIosArrowDown className="mr-3" />}
        {arrowUp &&<IoIosArrowUp className="mr-3" />}
        <p>More</p>
        </div>
      </div>
      {more && <div>
        <div className="py-2 pl-2 border-none rounded-md hover:bg-gray-400 mb-2 flex items-center cursor-pointer">
            <p>Theme</p>
        </div>
        <div className="py-2 pl-2 border-none rounded-md hover:bg-gray-400 mb-2 flex items-center cursor-pointer">
            <p>Fact Sheet</p>
        </div>
        <div className="py-2 pl-2 border-none rounded-md hover:bg-gray-400 mb-2 flex items-center cursor-pointer">
            <p>HomePage</p>
        </div>
      </div>}
      <div className="py-2 pl-2 border-none rounded-md hover:bg-gray-400 mb-2 flex items-center cursor-pointer">
        <div className="flex items-center">
        <IoSettingsOutline className="mr-3" />
        <p>Settings</p>
        </div>
      </div>
      <div className="py-2 pl-2 border-none rounded-md hover:bg-gray-400 mb-2 flex items-center cursor-pointer">
        <p>All Apps</p>
      </div>
      
    </div>}
  </div>
  )
}

export default SideBar
