// import { Link } from 'react-router-dom'
// import { IoIosArrowRoundDown } from "react-icons/io";
import Triangle from "../components/Triangle";
import ShortVerticalLine from "../components/ShortVerticalLine";
import LongVerticalLine from "../components/LongVerticalLine";
import HorizontalLine from "../components/HorizontalLine";

function Home() {
  return (
    <div className='mx-auto'>
      <header className="bg-[#222B44] text-white p-5 flex items-center">
        <h1 className="mr-10 font-semibold">Mutistation View</h1>
        <div className="flex ml-auto space-x-4">
        <label for="pizzaType" class="block font-semibold mr-2">Assets:</label>
        <select name="assets:" id="assets" className="px-4 py-1 bg-gray-700 rounded-md text-white focus:outline-none focus-ring-2 focus:ring-blue-500">
        <option selected disabled value="" className="text-gray-400">AT3_H3_R5_3A</option>
          <option value="Feeder"></option>
          <option value="Feeder"></option>
          <option value="Feeder"></option>
        </select>
        <select name="select" id="select" className="w-full px-4 py-1 rounded-md bg-[#08122E] text-white focus:outline-none focus-ring-2 focus:ring-blue-500">
          <option value="Feeder"></option>
          <option value="Feeder"></option>
          <option value="Feeder"></option>
          <option value="Feeder"></option>
        </select>
        <select name="select" id="select" className="w-full px-4 py-1 rounded-md bg-[#08122E] text-white focus:outline-none focus-ring-2 focus:ring-blue-500">
          <option value="Feeder"></option>
          <option value="Feeder"></option>
          <option value="Feeder"></option>
          <option value="Feeder"></option>
        </select>
        </div>
      </header>
      <div className="w-full bg-blue-400 text-center text-white font-semibold text-lg cursor-default">
        Multiple-Station View
      </div>
      <div className="bg-white w-full h-screen grid grid-cols-2 gap-6 p-8">
        <div className="relative w-full">
          <div className="absolute right-[15.3rem] bg-gray-400 text-center text-lg font-semibold">H3</div>
          <h3 className="absolute right-[7rem] max-w-36 text-center top-10 text-green-400 text-sm">DisCo Voltage Level AEDC 33kV</h3>
          <div className="absolute right-64">
            <LongVerticalLine />
          </div>
          <div className="absolute top-16 w-full">
            <HorizontalLine />
          </div>
          <div className="absolute right-[0.78rem] top-16">
            <ShortVerticalLine />
          </div>
          <div className="absolute left-[0.2rem] top-[7.85rem]">
            <Triangle />
          </div>
          <div className="absolute right-[0.78rem] top-[7.3rem]">
            <ShortVerticalLine />
          </div>
          <div className="absolute right-[16rem] top-16">
            <ShortVerticalLine />
          </div>
          <div className="absolute right-[15.4rem] top-[7.85rem]">
            <Triangle />
          </div>
          <div className="absolute right-[16rem] top-[7.3rem]">
            <ShortVerticalLine />
          </div>
          <div className="absolute left-[0.78rem] top-16">
            <ShortVerticalLine />
          </div>
          <div className="absolute right-[0.2rem] top-[7.85rem]">
            <Triangle />
          </div>
          <div className="absolute left-[0.78rem] top-[7.3rem]">
            <ShortVerticalLine />
          </div>
        </div>
        
        <div>H2</div>
      </div>
      
      {/* <Link to='/disco/aedc'>
      <div className='bg-black text-center rounded-md px-2 py-3 text-green-400 mx-auto max-w-sm'>
            AEDC
      </div>
      </Link> */}

    </div>
  )
}

export default Home
