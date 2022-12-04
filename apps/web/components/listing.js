import React, { useState } from "react";
import Program from "./program";
import { InfinitySpin } from "react-loader-spinner";

export default function Listing({ Options }) {
  const [Shown, setShown] = useState(false);
  return (
    <div className="w-full h-auto lg:p-16 p-6 flex lg:flex-wrap lg:flex-row flex-col lg:justify-center justify-start lg:items-start items-center gap-4">
      {Options.length > 0 ? (
        <>
          {Options.map((option, index) => (
            <div
              key={option._id}
              className="lg:w-1/3 w-full h-auto"
              onClick={() => setShown(option)}
            >
              <div className="cursor-pointer w-full h-auto rounded-md border-2 border-gray-200 overflow-hidden">
                <div
                  key={option._id}
                  className="cursor-pointer w-full h-auto bg-cover pt-32 pb-32 pl-14 pr-14"
                  style={{ backgroundImage: `url('${option.image}')` }}
                ></div>
                <h1 className="text-black p-2 text-center font-semibold pl-4 pr-4 text-lg">
                  {option.title}
                </h1>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="w-full h-auto flex flex-col justify-center items-center pt-11 pb-48">
          <InfinitySpin color="#000000" width="200"></InfinitySpin>
          <h1>Már élesztjük a szervert! Egy-két pillanat...</h1>
        </div>
      )}
      {Shown && <Program setShown={setShown} data={Shown}></Program>}
    </div>
  );
}
