import { useState } from "react";

function Sub({ filteredTsData, setI_station, filteredfeeder33Data }) {
  const [diagram, setDiagram] = useState(false);
  const hLength = filteredTsData.length;
  const displayedFeeder = new Set();
  const handleClick = (iStation) => {
    setI_station(iStation);
    setDiagram(!diagram);
  };
  return (
    <div className="w-max mb-24 grid grid-cols-2 gap-16 items-center justify-center mx-auto my-auto ">
      {filteredTsData.length > 0 ? (
        filteredTsData.map((data, index) => {
          if (!displayedFeeder.has(data.feeder_33)) {
            displayedFeeder.add(data.feeder_33);
            return (
              <div
                key={index}
                onClick={() => handleClick(data.feeder_33)}
                className="uppercase bg-white h-10 w-20 drop-shadow-md px-2 py-3 mx-auto font-semibold text-xs text-center rounded-md cursor-pointer"
              >
                <p>{data.feeder_33}</p>
              </div>
            );
          }
          return null;
        })
      ) : (
        <div>No Feeders Available</div>
      )}
      {diagram && (
        <div>
          <div className="mx-10">
            <div className="h-12 max-w-2 border-l border-black mx-auto"></div>
            <div className="w-96 border-t border-black"></div>
            <div className="flex justify-between max-w-96">
              {Array.from({ length: hLength }, (_, index) => (
                <div key={index} className="h-12 border-l border-black"></div>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            {filteredfeeder33Data.length > 0 &&
              filteredfeeder33Data.map((data, index) => (
                <div
                  key={index}
                  className="bg-gray-100 h-10 w-20 font-normal text-xs drop-shadow-lg text-center p-1"
                >
                  {data.injection_substation}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sub;
