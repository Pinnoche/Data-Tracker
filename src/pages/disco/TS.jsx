

function TS() {
  const ts = ['Ayede Transmission Station', 'Jericho Transmission Station']
  return (
    <div className='h-full w-full px-16 py-20 bg-white text-[#026487]'>
      <h1 className='text-2xl font-normal'>Select A Transmission Station:</h1>
      <ul className="my-10 grid grid-cols-2">{ts.map( (data, index) => (
        <li className="flex p-2 items-center gap-4 cursor-pointer" key={index}>
          <img src="/vector.png" alt="Bolt" className="w-4" /> 
          <p className="uppercase font-bold">{data}</p>
        </li>
      ))
      }
      </ul>
    </div>
  )
}

export default TS

