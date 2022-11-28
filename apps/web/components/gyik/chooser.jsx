import React, { useState } from "react";
import Image from "next/image";
import Article from "./arcticle";

export default function Chooser() {
  const [Selected, setSelected] = useState(0);
  return (
    <>
      {Selected !== 0 ? (
        <Article Selected={Selected} setSelected={setSelected}></Article>
      ) : (
        <></>
      )}
      <div className="w-full h-auto lg:pt-10 lg:pb-32 pb-10 flex flex-col lg:flex-row justify-start items-center lg:justify-center gap-4">
        <div
          onClick={() => setSelected(1)}
          className="lg:w-1/5 w-3/4 mr-4 ml-4 flex cursor-pointer gap-2 flex-col items-center justify-center border rounded-2xl h-44 border-black"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2449/2449841.png"
            width={100}
            height={100}
          />
          <h1 className="font-semibold">Ajánlott programok, lehetőségek</h1>
        </div>
        <div
          onClick={() => setSelected(2)}
          className="lg:w-1/5 w-3/4 mr-4 ml-4 flex cursor-pointer gap-2 flex-col items-center overflow-hidden justify-center border rounded-2xl h-44 border-black"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2274/2274543.png"
            width="100"
            height="100"
          />
          <h1 className="font-semibold">Általunk szervezett programok</h1>
        </div>
        <div
          onClick={() => setSelected(3)}
          className="lg:w-1/5 w-3/4 mr-4 ml-4 flex cursor-pointer gap-2 flex-col items-center overflow-hidden justify-center border rounded-2xl h-44 border-black"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3417/3417309.png"
            width="100"
            height="100"
          />
          <h1 className="font-semibold">Szerződéskötés</h1>
        </div>
      </div>
    </>
  );
}
