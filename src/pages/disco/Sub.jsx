import { useState, useCallback, useEffect } from "react";
import FeederButton from "../../components/FeederButton";
import IStation from "../../components/IStation";

function Sub({
  filteredTsData,
  setI_station,
  filteredfeeder33Data,
  filteredISub,
  setF11,
}) {
  const [diagramId, setDiagramId] = useState(null);
  const [f11Id, setF11Id] = useState(null);
  const [hLength, setHLength] = useState(null);
  const displayedFeeder = new Set();
  const displayed33 = new Set();

  const handleClick = useCallback(
    (iStation) => {
      setI_station(iStation);
      console.log(filteredfeeder33Data);
      setDiagramId((prevId) => (prevId === iStation ? null : iStation));
    },
    [filteredfeeder33Data, setI_station]
  );

  const handleIsClick = useCallback(
    (f11) => {
      setF11(f11);
      setF11Id((prevId) => (prevId === f11 ? null : f11));
    },
    [setF11]
  );

  useEffect(() => {
    setHLength(displayed33.size);
    console.log(hLength);
  }, [displayed33, hLength]);
  return (
    <div className="w-full">
      {filteredTsData.length > 0 ? (
        filteredTsData.map((data) => {
          if (!displayedFeeder.has(data.feeder_33)) {
            displayedFeeder.add(data.feeder_33);
            return (
              <>
                <FeederButton
                  key={data.feeder_33}
                  feeder={data.feeder_33}
                  diagramId={diagramId}
                  onClick={() => handleClick(data.feeder_33)}
                />
                <>
                  {diagramId === data.feeder_33 && (
                    <div className={`${diagramId && "mb-8"}`}>
                      <div className="h-12 max-w-2 border-l border-black mx-auto"></div>

                      <div className="w-[88%] border-t border-black mx-auto"></div>

                      {/* Vertical Line Above Feeder33 */}
                      {hLength && (
                        <div className="flex justify-between max-w-[88%] mx-auto">
                          {Array.from({ length: hLength }, (_, index) => (
                            <div
                              key={index}
                              className="h-12 border-l border-black"
                            ></div>
                          ))}
                        </div>
                      )}

                      <div className="flex justify-between gap-5">
                        {filteredfeeder33Data &&
                          filteredfeeder33Data.map((sub) => {
                            if (!displayed33.has(sub.injection_substation)) {
                              displayed33.add(sub.injection_substation);
                              return (
                                <>
                                  <IStation
                                    key={sub.injection_substation}
                                    substation={sub.injection_substation}
                                    onClick={() =>
                                      handleIsClick(sub.injection_substation)
                                    }
                                  />
                                </>
                              );
                            }
                            return null;
                          })}
                      </div>

                      {/* Feeder 11 Part */}

                      {filteredfeeder33Data.map((sub, index) => (
                        <>
                          {/* Vertical Line under Feeder33 */}

                          {hLength && (
                            <div className="flex justify-between max-w-[88%] mx-auto">
                              {Array.from({ length: hLength }, (_, index) => (
                                <div
                                  key={index}
                                  className="h-12 border-l border-black"
                                ></div>
                              ))}
                            </div>
                          )}

                          {f11Id === sub.injection_substation && (
                            <div className="relative">
                              {filteredISub.map((iSub, index) => (
                                <div
                                  key={index}
                                  className={` flex items-center ${
                                    index % 2 === 0
                                      ? "mr-auto"
                                      : "ml-auto flex-row-reverse"
                                  }`}
                                >
                                  <p className="w-32 bg-green-400 p-2 break-words rounded-md text-center text-xs">
                                    {iSub.feeder_11}
                                  </p>
                                  <div className="w-8 border-b border-black"></div>
                                  
                                </div>
                              ))}
                              <div className="h-full absolute top-0 left-0 right-0 mx-auto max-w-2 border-l border-black"></div>
                            </div>
                          )}
                        </>
                      ))}
                    </div>
                  )}
                </>
              </>
            );
          }
          return null;
        })
      ) : (
        <div>No Feeders 33 Available</div>
      )}
    </div>
  );
}

export default Sub;
