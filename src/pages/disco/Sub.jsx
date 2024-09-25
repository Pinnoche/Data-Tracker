import React from 'react';

// Create a SubStation component that accepts dynamic data as props
function Sub({ stations }) {
  return (
    <div className='w-max mb-24'>
      {/* Top-level name */}
      <div className='name h-10 w-20 shadow-lg p-1 mx-auto font-semibold text-xs text-center'>{stations[0]}</div>

      {/* Middle Section with Lines */}
      <div className='mx-10'>
        <div className='h-12 max-w-2 border-l border-black mx-auto'></div>
        <div className='w-96 border-t border-black'></div>
        <div className='flex justify-between max-w-96'>
          <div className='h-12 border-l border-black'></div>
          <div className='h-12 border-l border-black'></div>
          <div className='h-12 border-l border-black'></div>
          <div className='h-12 border-l border-black'></div>
        </div>
        {/* <div className='flex justify-between max-w-96'>
          <div className='border-2 rounded-3xl border-black'></div>
          <div className='border-2 rounded-3xl border-black'></div>
          <div className='border-2 rounded-3xl border-black'></div>
          <div className='border-2 rounded-3xl border-black'></div>
        </div> */}
      </div>

      {/* Bottom Section where dynamic data is mapped */}
      <div className='flex justify-between'>
        {stations.slice(1).map((station, index) => (
          <div key={index} className='name h-10 w-20 font-normal text-xs shadow-lg text-center p-1'>
            {station}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sub;
