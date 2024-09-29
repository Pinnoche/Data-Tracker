import Sub from "./Sub";
function SubStation({ filteredTsData }) {

  return (
    <div className='h-full w-full bg-white text-black p-6'>
        {filteredTsData && <div>
            <div className='bg-[#026487] max-w-md p-1 rounded-md font-bold text-center my-2 text-sm mx-auto shadow-lg text-white '>
                MULTI-STATION VIEW
            </div>
            <div className='bg-gray-200 flex justify-evenly rounded-md text-center p-1 mb-20 max-w-md font-bold text-sm mx-auto shadow-lg text-[#026487]'>
                <p>T1, 100MVA</p>
                <p>T1, 100MVA</p>
                <p>T1, 100MVA</p>
            </div>
        </div>}
        <div className='grid grid-cols-2 justify-between mx-24'>
            <Sub filteredTsData={filteredTsData} />
        </div>
    </div>    
  );
}

export default SubStation;
