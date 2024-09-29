import { useNavigate } from "react-router-dom"
function TS({datas, setFeeder}) {
  const navigate = useNavigate();
  const handleClick = (ts)=> {
    setFeeder(ts);
    navigate('/substation');
}
const displayedBands = new Set();
  return (
    <div className='h-full w-full px-16 py-20 bg-white text-[#026487]'>
      <div>
        <h1 className='text-2xl font-normal'>Select A Transmission Station:</h1>
        <ul className="my-10 grid grid-cols-2">
          {datas.length > 0 ? (
            datas.map((data, index) => {
              if(!displayedBands.has(data.transmission_station)){
                displayedBands.add(data.transmission_station);
                return(
              <li className="flex p-2 items-center gap-4 cursor-pointer" key={index}>
                <img src="/vector.png" alt="Bolt" className="w-4" />
                <div onClick={() => handleClick(data.transmission_station)}>
                  <p className="uppercase font-bold">Transmission Station: {data.transmission_station}</p>
                  
                </div>
              </li>)}
              return null;
            })
          ) : (
            <p>No Transmission Stations available</p>
          )}
        </ul>
      </div>
      
    </div>
  );
}

export default TS;
