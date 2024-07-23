// import { Link } from 'react-router-dom'
// import { IoIosArrowRoundDown } from "react-icons/io";
import Diagram from "../components/Diagram"

function Home() {
  return (
    <div className='mx-auto'>
      <header className="bg-[#222B44] text-white p-5 flex items-center">
        <h1 className="mr-10 font-semibold underline cursor-pointer">Muti-station View</h1>
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
      <div className="bg-white w-full grid grid-cols-2 gap-14 p-8 ">
        {/* Grid 1 */}
        <Diagram />

        {/* Grid 2 */}
        <Diagram />

        {/* Grid 3 */}
        <Diagram />
        
        {/* Grid 4 */}

        <Diagram />
        
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
