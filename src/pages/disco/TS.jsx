import { useNavigate } from "react-router-dom";
function TS({ datas, setFeeder, ibedcData }) {
  const navigate = useNavigate();
  const handleClick = (ts) => {
    setFeeder(ts);
    navigate("/substation");
  };
  const displayedTs = new Set();
  return (
    <div className="h-full w-full px-16 py-20 bg-white text-[#026487]">
      <div>
        <h1 className="text-2xl font-normal">Select A Transmission Station:</h1>
        <ul className="my-10 grid grid-cols-2">
          {ibedcData.length > 0 ? (
            ibedcData.map((data, index) => {
              if (!displayedTs.has(data.transmission_station)) {
                displayedTs.add(data.transmission_station);
                return (
                  <li
                    className="max-w-lg flex items-center gap-4 hover:bg-[#026487] hover:text-white py-2 px-3 hover:mt-2 hover:rounded-md"
                    key={index}
                  >
                    <div className="flex">
                      <img
                        src="/vector.png"
                        alt="Bolt"
                        className="w-4 hover:hidden"
                      />
                      <img
                        className="w-4 hover:block"
                        src="/white_bolt.png"
                        alt="White bolt"
                      />
                    </div>
                    <div
                      className="cursor-pointer "
                      onClick={() => handleClick(data.transmission_station)}
                    >
                      <p className="uppercase font-bold">
                        Transmission Station: {data.transmission_station}
                      </p>
                    </div>
                  </li>
                );
              }
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
