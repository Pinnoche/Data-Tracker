import Time from "./Time"

function NavBar() {
  return (
    <div className="">
      <div className="bg-[#203266] text-white p-3 flex flex-row justify-between">
      <h1 className="font-bold text-lg col-span-4">AEDC LIVE FEEDER FEED</h1>
      <div className="flex [&>img]:mr-4">
      {/* <img src="info-icon.png" alt="Info" width={25} className="overflow-hidden rounded hover:border-white hover:border-2 cursor-pointer" />
      <img src="faq.png" alt="Faq" width={25} className="overflow-hidden rounded hover:border-white hover:border-2 cursor-pointer" />
      <img src="settings.png" alt="Settings" width={25} className="overflow-hidden rounded hover:border-white hover:border-2 cursor-pointer"  /> */}
       <Time />
      </div>
    </div>
    </div>
    
  )
}

export default NavBar
