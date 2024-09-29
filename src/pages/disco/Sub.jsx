import React from 'react';

function Sub({ stations }) {
  const hLength = stations.length -1;

  return (
    <div className='w-max mb-24'>
      <div className='uppercase bg-white h-10 w-20 drop-shadow-md px-2 py-3 mx-auto font-semibold text-xs text-center rounded-md'>{stations[0]}</div>

      <div className='mx-10'>
        <div className='h-12 max-w-2 border-l border-black mx-auto'></div>
        <div className='w-96 border-t border-black'></div>
        <div className='flex justify-between max-w-96'>
          {
            Array.from({length: hLength}, (_, index)=>(
              <div key={index} className='h-12 border-l border-black'></div>
            ))
          }
        </div>
        
      </div>

      <div className='flex justify-between'>
        {stations.slice(1).map((station, index) => (
          <div key={index} className='bg-gray-100 h-10 w-20 font-normal text-xs drop-shadow-lg text-center p-1'>
            {station}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sub;
