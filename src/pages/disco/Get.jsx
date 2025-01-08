import { useState } from "react";

function Get() {
  const [data, setData] = useState(["left", "right", "left", "right", "left"]);
  return (
    <div className="w-[120px] relative">
      {data.map((data, index) => (
        <>
          <div
            key={index}
            className={` w-[60px] h-[20px] flex items-center ${
              index % 2 === 0 ? "mr-auto" : "ml-auto flex-row-reverse"
            }`}
          >
            {data}
          <div className="w-8 border-b border-black"></div>
          </div>
        </>
      ))}
      <div className="h-full absolute top-0 left-0 right-0 mx-auto  max-w-2 border-l border-black"></div>
    </div>
  );
}

export default Get;
