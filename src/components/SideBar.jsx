
// import { useState } from "react";
import { useLocation } from "react-router-dom";


function SideBar({ handleSideBar, showSideBar, setDashboard }) {
  
  const location = useLocation();
  const param = location.pathname;
  // const [live, setLive ] = useState(false);
  // const [more, setMore ] = useState(false);
  // const [arrowDown, setArrowDown ] = useState(true);
  // const [arrowUp, setArrowUp ] = useState(false);

  const sideBarList = [
    {
      name: 'live',
      icon: '/videocam_icon.png',
      alt: 'Live'
    },

    {
      name: 'Dashboard',
      icon: '/dashboard_icon.png',
      alt: 'Dashboard'
    },

    {
      name: 'Alerts',
      icon: '/alert_icon.png',
      alt: 'Alerts'
    },
    {
      name: 'Settings',
      icon: '/settings_icon.png',
      alt: 'Settings'
    },

    {
      name: 'Search',
      icon: '/search_icon.png',
      alt: 'Search'
    }
  ]
  // const handleMore = () => {
  //       setMore(!more);
  //   }
  //   const handleArrow = () => {
  //       setArrowDown(!arrowDown);
  //       setArrowUp(!arrowUp);
  //   }
  //   const handleAll = () => {
  //       handleArrow();
  //       handleMore();
  //   }
  return (
    <div className={`${showSideBar && "m-0"}`}>
        
        {showSideBar && <div className={`w-[15%] fixed min-h-screen py-1 px-3 shadow-white ${param === '/dashboard' ? 'bg-[#026487] text-white' : 'bg-gray-100 text-[#026487]'}`}>
          <div className={`flex items-center mx-3 my-2 gap-4 cursor-pointer ${showSideBar ? "block" : "hidden"}`} onClick={handleSideBar} >
            <h1 className="text-base font-bold">X</h1>
            <p className="font-bold">Close</p>
          </div>

          {sideBarList.map( (data, index) => (
             <div key={index} className="w-full px-2 py-3 flex items-center gap-4 space-y-2 cursor-pointer">
                <img src={data.icon} alt={data.alt} />
                {data.name}
             </div>
          ))}
        {/* {live && <div onMouseLeave={() => setLive(false)} className="absolute top-9 left-48 w-full px-3 py-1 rounded-sm bg-white shadow-white shadow-sm border-2 border-white">
          <div className="bg-gray-300 py-2 px-4 rounded-md mb-1 cursor-pointer">Everywhere</div>
          <div className="hover:bg-gray-200 py-2 px-4 rounded-md mb-1 cursor-pointer">AEDC</div>
          <div className="hover:bg-gray-200 py-2 px-4 rounded-md mb-1 cursor-pointer">IEDC</div>
          <div className="hover:bg-gray-200 py-2 px-4 rounded-md mb-1 cursor-pointer">KDDC</div>
          <div className="hover:bg-gray-200 py-2 px-4 rounded-md mb-1 cursor-pointer">AEDC</div>
          <div className="hover:bg-gray-200 py-2 px-4 rounded-md mb-1 cursor-pointer">AEDC</div>
          <div className="hover:bg-gray-200 py-2 px-4 rounded-md mb-1 cursor-pointer">AEDC</div>
        </div>}
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
      </div> */}
      
    </div>}
  </div>
  )
}

export default SideBar
